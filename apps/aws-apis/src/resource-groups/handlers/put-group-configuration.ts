import { OpenAPIHono } from '@hono/zod-openapi'
import { postPutGroupConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const putGroupConfigurationHandler = app.openapi(postPutGroupConfigurationRoute, (c) => {
  throw new Error('Not implemented')
})
