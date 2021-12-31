import React from 'react';
import { instructionTypes } from '../constants';
import convertBinaryStringToHexString from '../../helpers/convert-binary-string-to-hex-string';

const generate_RET = () => { // eslint-disable-line camelcase
  const instruction = {};

  instruction.mnemonic = 'RET';
  instruction.type = instructionTypes.CALL_AND_RETURN;
  instruction.flags = {};
  instruction.cycles = '4';
  instruction.bytes = 1;

  const opCodeInBinary = '11001001';
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  instruction.description = (
    <>
      <p>
        Pop from the memory stack the program counter PC value pushed when the
        subroutine was called, returning control to the source program.
      </p>
      <p>
        The contents of the address specified by the stack pointer SP are loaded
        in the lower-order byte of PC, and the contents of SP are incremented by 1.
        The contents of the address specified by the new SP value are then loaded
        in the higher-order byte of PC, and the contents of SP are incremented by 1
        again. (THe value of SP is 2 larger than before instruction execution.)
        The next instruction is fetched from the address specified by the content
        of PC (as usual).
      </p>
    </>
  );

  return instruction;
};

export default generate_RET; // eslint-disable-line camelcase
