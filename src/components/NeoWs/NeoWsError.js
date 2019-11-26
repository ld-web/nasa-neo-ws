import React from 'react';
import Alert from '../Utils/Alert';

const NeoWsError = ({ error }) => (
  error && <Alert type="danger" message={error.message} />
);

export default NeoWsError;