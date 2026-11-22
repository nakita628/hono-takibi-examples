import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierRoute,
  deleteCrmObjectSchemas202609SchemasObjectTypeRoute,
  getCrmObjectSchemas202609SchemasObjectTypeRoute,
  getCrmObjectSchemas202609SchemasRoute,
  patchCrmObjectSchemas202609SchemasObjectTypeRoute,
  postCrmObjectSchemas202609SchemasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjectSchemas202609SchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjectSchemas202609SchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjectSchemas202609SchemasObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjectSchemas202609SchemasObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjectSchemas202609SchemasObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
