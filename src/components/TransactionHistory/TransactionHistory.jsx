import { Table, THead, Tr, Td } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <THead>Type</THead>
          <THead>Amount</THead>
          <THead>Currency</THead>
        </tr>
      </thead>

      <tbody>
        {items.map(i => {
          return (
            <Tr key={i.id}>
              <Td>{i.type}</Td>
              <Td>{i.amount}</Td>
              <Td>{i.currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;
