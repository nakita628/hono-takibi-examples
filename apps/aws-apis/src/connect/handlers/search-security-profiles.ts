import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchSecurityProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const searchSecurityProfilesHandler = app.openapi(postSearchSecurityProfilesRoute, (c) => {
  throw new Error('Not implemented')
})
