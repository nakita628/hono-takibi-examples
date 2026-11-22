import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1BillTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const billTypesHandler = app.openapi(getApiV1BillTypesRoute, (c) => {
  throw new Error('Not implemented')
})
