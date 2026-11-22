import { OpenAPIHono } from '@hono/zod-openapi'
import { postListEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const ListEntitiesHandler = app.openapi(postListEntitiesRoute, (c) => {
  throw new Error('Not implemented')
})
