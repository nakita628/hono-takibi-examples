import { OpenAPIHono } from '@hono/zod-openapi'
import { patchLiveMeetingsMeetingIdEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const liveMeetingsHandler = app.openapi(patchLiveMeetingsMeetingIdEventsRoute, (c) => {
  throw new Error('Not implemented')
})
