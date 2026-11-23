import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountCartListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const accountCartListJsonHandler = app.openapi(getAccountCartListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
