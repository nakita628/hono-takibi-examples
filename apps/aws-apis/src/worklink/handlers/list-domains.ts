import { OpenAPIHono } from '@hono/zod-openapi'
import { postListDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const listDomainsHandler = app.openapi(postListDomainsRoute, (c) => {
  throw new Error('Not implemented')
})
