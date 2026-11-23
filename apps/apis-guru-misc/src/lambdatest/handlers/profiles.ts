import { OpenAPIHono } from '@hono/zod-openapi'
import { getProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const profilesHandler = app.openapi(getProfilesRoute, (c) => {
  throw new Error('Not implemented')
})
