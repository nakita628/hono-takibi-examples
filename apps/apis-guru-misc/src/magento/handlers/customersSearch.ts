import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomersSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const customersSearchHandler = app.openapi(getV1CustomersSearchRoute, (c) => {
  throw new Error('Not implemented')
})
