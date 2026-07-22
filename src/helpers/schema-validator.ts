import Ajv, { type JSONSchemaType } from 'ajv';

const ajv = new Ajv({ allErrors: true, strict: false });

export function validateSchema<T>(schema: JSONSchemaType<T>, data: unknown): void {
  const validate = ajv.compile(schema);
  if (!validate(data)) {
    throw new Error(`Resposta fora do contrato: ${ajv.errorsText(validate.errors)}`);
  }
}
