import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1p7beta1NameRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app.openapi(getV1p7beta1NameRoute, (c) => {
  throw new Error('Not implemented')
})
