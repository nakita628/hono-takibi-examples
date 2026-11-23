import { OpenAPIHono } from '@hono/zod-openapi'
import { postListFailedIPNsRoute } from '../routes'

const app = new OpenAPIHono()

export const listFailedIpNsHandler = app.openapi(postListFailedIPNsRoute, (c) => {
  throw new Error('Not implemented')
})
