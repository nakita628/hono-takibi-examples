import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateRecordingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const createRecordingConfigurationHandler = app.openapi(
  postCreateRecordingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
