import { OpenAPIHono } from '@hono/zod-openapi'
import { putEnumOptionsEnumOptionGidRoute } from '../routes'

const app = new OpenAPIHono()

export const enumOptionsHandler = app.openapi(putEnumOptionsEnumOptionGidRoute, (c) => {
  throw new Error('Not implemented')
})
