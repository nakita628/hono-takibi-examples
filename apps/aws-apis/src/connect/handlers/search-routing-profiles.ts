import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchRoutingProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const searchRoutingProfilesHandler = app.openapi(postSearchRoutingProfilesRoute, (c) => {
  throw new Error('Not implemented')
})
