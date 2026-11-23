import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCamerasCameraNameRoute } from '../routes'

const app = new OpenAPIHono()

export const camerasHandler = app.openapi(deleteCamerasCameraNameRoute, (c) => {
  throw new Error('Not implemented')
})
