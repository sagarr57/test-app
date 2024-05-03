import React from 'react';
import { TextField, Button } from '@material-ui/core';

const InvoiceDetailComponent = ({ invoice, mode, onSave, onDelete }) => {
    return (
        <div>
            {/* Form fields */}
            <Button onClick={onSave}>{mode === 'create' ? 'Save' : 'Update'}</Button>
            {mode === 'update' && <Button onClick={onDelete}>Delete</Button>}
            <Button>Cancel</Button>
        </div>
    );
};

export default InvoiceDetailComponent;
