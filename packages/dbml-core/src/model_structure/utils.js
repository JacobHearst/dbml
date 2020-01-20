import { DEFAULT_SCHEMA_NAME } from './config';

export function shouldPrintSchema (schema) {
  return schema.name !== DEFAULT_SCHEMA_NAME || (schema.name === DEFAULT_SCHEMA_NAME && schema.database.hasDefaultSchema);
}