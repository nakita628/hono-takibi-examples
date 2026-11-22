import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetRecordingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const GetRecordingConfigurationHandler = app.openapi(
  postGetRecordingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
