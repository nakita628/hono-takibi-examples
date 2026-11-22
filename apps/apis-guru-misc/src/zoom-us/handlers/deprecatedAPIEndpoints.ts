import { OpenAPIHono } from '@hono/zod-openapi'
import { getPastMeetingsMeetingIdFilesRoute, getPastWebinarsWebinarIdFilesRoute } from '../routes'

const app = new OpenAPIHono()

export const deprecatedAPIEndpointsHandler = app
  .openapi(getPastMeetingsMeetingIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastWebinarsWebinarIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
