import { OpenAPIHono } from '@hono/zod-openapi'
import { postAreaOfInterestRoute } from '../routes'

const app = new OpenAPIHono()

export const areaOfInterestHandler = app.openapi(postAreaOfInterestRoute, (c) => {
  throw new Error('Not implemented')
})
