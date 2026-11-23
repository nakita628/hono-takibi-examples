import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const getTokenHandler = app.openapi(postGetTokenRoute, (c) => {
  throw new Error('Not implemented')
})
