import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1VatTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const vatTypesHandler = app.openapi(getV1VatTypesRoute, (c) => {
  throw new Error('Not implemented')
})
