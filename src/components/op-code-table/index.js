import { generateAllInstructions } from '../../generators';
import { createInitialOpCodesGrid, setCellForOpCode } from '../../helpers/grid-helpers';

// Set up:
const opCodesGrid = createInitialOpCodesGrid();
const instructions = generateAllInstructions();

// iterate over opcodes to place objects into opCodesGrid
instructions.forEach(instruction => {
  setCellForOpCode(instruction.opCode, instruction, opCodesGrid);
});

const OpCodeTable = () => (
  <table id="op-code-table">
    <caption>Game Boy CPU instructions, organized by op code</caption>
    <tbody>
      <tr>
        <td></td>
        {
          Array(16).fill('').map((value, index) => (
            <th scope="col" key={`x${index.toString()}`}>{`x${index.toString(16).toUpperCase()}`}</th>
          ))
        }
      </tr>
      {
        opCodesGrid.map((gridRow, rowIndex) => (
          <tr key={`${rowIndex.toString(16)}x`}>
            <th scope="row">{`${rowIndex.toString(16).toUpperCase()}x`}</th>
            {
              gridRow.map((gridCell, columnIndex) => (
                <td
                  key={`${rowIndex}${columnIndex}`}
                  className={`instruction ${gridCell.type}`}
                >
                {
                  gridCell.mnemonic ? gridCell.mnemonic : gridCell
                }
                </td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default OpCodeTable;