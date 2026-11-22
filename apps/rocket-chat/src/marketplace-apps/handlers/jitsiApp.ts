import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1VideoConferenceJitsiUpdateTimeoutRoute } from '../routes'

const app = new OpenAPIHono()

export const jitsiAppHandler = app.openapi(
  postApiV1VideoConferenceJitsiUpdateTimeoutRoute,
  (c) => {},
)
