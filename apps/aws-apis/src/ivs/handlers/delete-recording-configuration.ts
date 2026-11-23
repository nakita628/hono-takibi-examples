import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteRecordingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteRecordingConfigurationHandler = app.openapi(
  postDeleteRecordingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
