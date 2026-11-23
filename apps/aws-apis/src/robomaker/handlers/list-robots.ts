import { OpenAPIHono } from '@hono/zod-openapi'
import { postListRobotsRoute } from '../routes'

const app = new OpenAPIHono()

export const listRobotsHandler = app.openapi(postListRobotsRoute, (c) => {
  throw new Error('Not implemented')
})
