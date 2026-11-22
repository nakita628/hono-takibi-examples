import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjectSchemas202609SchemasObjectTypeAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app.openapi(
  postCrmObjectSchemas202609SchemasObjectTypeAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
