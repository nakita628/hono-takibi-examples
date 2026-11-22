import { OpenAPIHono } from '@hono/zod-openapi'
import { postListRecordingConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListRecordingConfigurationsHandler = app.openapi(
  postListRecordingConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
