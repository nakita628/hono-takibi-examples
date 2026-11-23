import { OpenAPIHono } from '@hono/zod-openapi'
import { postResourceResourceArnGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const resourceHandler = app.openapi(postResourceResourceArnGroupsRoute, (c) => {
  throw new Error('Not implemented')
})
