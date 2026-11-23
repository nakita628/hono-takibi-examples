import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetRecordingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const getRecordingConfigurationHandler = app.openapi(
  postGetRecordingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
