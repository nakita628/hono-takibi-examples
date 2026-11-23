import { OpenAPIHono } from '@hono/zod-openapi'
import { postListRecordingConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const listRecordingConfigurationsHandler = app.openapi(
  postListRecordingConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
