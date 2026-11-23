import { OpenAPIHono } from '@hono/zod-openapi'
import { getTriggersStatusCameraNameRoute } from '../routes'

const app = new OpenAPIHono()

export const triggersHandler = app.openapi(getTriggersStatusCameraNameRoute, (c) => {
  throw new Error('Not implemented')
})
