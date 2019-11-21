import { instructionTypes, registerBinaryCodes } from '../constants';
import { convertBinaryStringToHexString } from '../../helpers/convert-binary-string-to-hex-string';

export const generate_ADC_A_r8 = () => {
  const instructions = [];

  for (let register of Object.keys(registerBinaryCodes)) {
    const instruction = {};

    instruction.mnemonic = `ADC A, ${register}`;
    instruction.type = instructionTypes.EIGHT_BIT_ARITHMETIC_AND_LOGICAL_OPERATION;
    instruction.flags = {
      CY: '8-bit',
      H: '8-bit',
      N: '0',
      Z: 'Z'
    };
    instruction.cycles = 2;
    instruction.bytes = 1;

    const opCodeInBinary = `10001${registerBinaryCodes[register]}`;
    instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

    instructions.push(instruction);
  }

  return instructions;
}