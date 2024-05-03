import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";

const InvoiceDetailComponent = ({ invoice, mode, onSave, onDelete }) => {
  const [items, setItems] = useState([
    { id: "", itemName: "", quantity: 0, price: 0, amount: 0 },
  ]);
  const [billSundrys, setBillSundrys] = useState([
    { id: "", billSundryName: "", amount: 0 },
  ]);
  const [invoiceNumber, setInvoiceNumber] = useState(0);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    if (field === "quantity" || field === "price") {
      updatedItems[index].amount =
        updatedItems[index].quantity * updatedItems[index].price;
    }
    setItems(updatedItems);
  };

  const handleBillSundryChange = (index, field, value) => {
    const updatedBillSundrys = [...billSundrys];
    updatedBillSundrys[index][field] = value;
    setBillSundrys(updatedBillSundrys);
  };

  const handleAddItem = () => {
    setItems([
      ...items,
      { id: "", itemName: "", quantity: 0, price: 0, amount: 0 },
    ]);
  };

  const handleAddBillSundry = () => {
    setBillSundrys([...billSundrys, { id: "", billSundryName: "", amount: 0 }]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleDeleteBillSundry = (index) => {
    const updatedBillSundrys = [...billSundrys];
    updatedBillSundrys.splice(index, 1);
    setBillSundrys(updatedBillSundrys);
  };

  const handleSave = () => {
    // Validate
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <TextField
            label="Item Name"
            value={item.itemName}
            onChange={(e) =>
              handleItemChange(index, "itemName", e.target.value)
            }
          />
          <Button onClick={() => handleDeleteItem(index)}>Delete</Button>
        </div>
      ))}
      <Button onClick={handleAddItem}>Add Item</Button>

      {billSundrys.map((billSundry, index) => (
        <div key={index}>
          <TextField
            label="Bill Sundry Name"
            value={billSundry.billSundryName}
            onChange={(e) =>
              handleBillSundryChange(index, "billSundryName", e.target.value)
            }
          />
          <Button onClick={() => handleDeleteBillSundry(index)}>Delete</Button>
        </div>
      ))}
      <Button onClick={handleAddBillSundry}>Add Bill Sundry</Button>

      <Button onClick={handleSave}>Save</Button>
      <Button onClick={onSave}>{mode === "create" ? "Save" : "Update"}</Button>
      {mode === "update" && <Button onClick={onDelete}>Delete</Button>}
      <Button>Cancel</Button>
    </div>
  );
};

export default InvoiceDetailComponent;
