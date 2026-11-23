import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteAnomalyDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteAnomalyDetectorHandler = app.openapi(postDeleteAnomalyDetectorRoute, (c) => {
  throw new Error('Not implemented')
})
