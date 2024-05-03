const sampleInvoices = [
  { id: "1", itemName: "item1", Quantity: 3, price: 8, amount: 24 },
  { id: "2", itemName: "item2", Quantity: 6, price: 18, amount: 24 },
  { id: "3", itemName: "item3", Quantity: 5, price: 6, amount: 22 },
  { id: "4", itemName: "item4", Quantity: 4, price: 80, amount: 21 },
];
const InvoiceListComponent = () => {
  return (
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">ItemName</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {sampleInvoices.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.itemName}</td>
                <td>{item.Quantity}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceListComponent;
