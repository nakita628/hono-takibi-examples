import { OpenAPIHono } from '@hono/zod-openapi'
import { getResolveRoute } from '../routes'

const app = new OpenAPIHono()

export const miscellaneousHandler = app.openapi(getResolveRoute, (c) => {
  throw new Error('Not implemented')
})
