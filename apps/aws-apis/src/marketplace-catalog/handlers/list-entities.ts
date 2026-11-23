import { OpenAPIHono } from '@hono/zod-openapi'
import { postListEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const listEntitiesHandler = app.openapi(postListEntitiesRoute, (c) => {
  throw new Error('Not implemented')
})
