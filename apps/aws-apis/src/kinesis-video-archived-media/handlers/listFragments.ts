import { OpenAPIHono } from '@hono/zod-openapi'
import { postListFragmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const listFragmentsHandler = app.openapi(postListFragmentsRoute, (c) => {
  throw new Error('Not implemented')
})
