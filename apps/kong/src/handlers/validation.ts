import { OpenAPIHono } from '@hono/zod-openapi'
import { postSchemasVaultsVaultNameRoute } from '../routes'

const app = new OpenAPIHono()

export const validationHandler = app.openapi(postSchemasVaultsVaultNameRoute, (c) => {
  throw new Error('Not implemented')
})
