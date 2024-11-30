import React, { useState } from 'react'
import ReactSwitch from 'react-switch'

const PasswordGenerator = () => {

  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLenght] = useState();
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpeialChars] = useState(true);

  const generatePassword = () => {
    const lowerCaseChars = 'qwertyuiopasdfghjklzxcvbnm';
    const upperCaseChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const numbers = '1234567890';
    const specialChars = '!@#$%^&*()';

    let validChars = lowerCaseChars;

    if (includeUpperCase) {
      validChars += upperCaseChars;
    }
    if (includeNumbers) {
      validChars += numbers;
    }
    if (includeSpecialChars) {
      validChars += specialChars;
    }

    let generatePassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars.charAt(randomIndex);
    }


    setPassword(generatePassword);

  }


  return (
    <div className='pt-8 text-white font-bold'>
      <div className='flex flex-col items-center '>
        <div className='bg-blue-600 w-[550px] shadow-2xl hover:shadow-purple-400 rounded-md'>

          <div className='mb-4 flex items-center justify-between pr-2 pl-2'>
            <label> Password Length : </label>
            <input
              value={passwordLength}
              onChange={(e) => setPasswordLenght(e.target.value)}
              className='w-10 h-5 bg-red-600 pl-2 rounded-md' type='numbers' />
          </div>

          <div className='mb-4 flex items-center justify-between pr-2 pl-2'>
            <label> Include Uppercase : </label>
            <ReactSwitch
              checked={includeUpperCase}
              onChange={() => setIncludeUpperCase(!includeUpperCase)}
              height={20} width={40} handleDiameter={1} />
          </div>

          <div className='mb-4 flex items-center justify-between pr-2 pl-2'>
            <label> Include Numbers : </label>
            <ReactSwitch
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              height={20} width={40} handleDiameter={1} />
          </div>

          <div className='mb-4 flex items-center justify-between pr-2 pl-2'>
            <label> Include Special Characters : </label>
            <ReactSwitch
              checked={includeSpecialChars}
              onChange={() => setIncludeSpeialChars(!includeSpecialChars)}
              height={20} width={40} handleDiameter={1} />
          </div>
          <button
            onClick={generatePassword}
            className="w-[200px] bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold py-2 rounded-md hover:shadow-lg"
          >
            Generate Password
          </button>

          <h2 className="mt-4 text-center text-lg">{password}</h2>

        </div>

      </div>
    </div>
  )
}

export default PasswordGenerator