import { OpenAPIHono } from '@hono/zod-openapi'
import { getGrantBlocksRoute } from '../routes'

const app = new OpenAPIHono()

export const grantBlocksHandler = app.openapi(getGrantBlocksRoute, (c) => {
  throw new Error('Not implemented')
})
