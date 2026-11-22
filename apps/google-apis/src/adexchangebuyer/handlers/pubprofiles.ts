import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublisherAccountIdProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const pubprofilesHandler = app.openapi(getPublisherAccountIdProfilesRoute, (c) => {
  throw new Error('Not implemented')
})
