import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateRecordingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const CreateRecordingConfigurationHandler = app.openapi(
  postCreateRecordingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
