import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteRecordingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteRecordingConfigurationHandler = app.openapi(
  postDeleteRecordingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
