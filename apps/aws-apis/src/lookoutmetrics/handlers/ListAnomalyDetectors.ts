import { OpenAPIHono } from '@hono/zod-openapi'
import { postListAnomalyDetectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListAnomalyDetectorsHandler = app.openapi(postListAnomalyDetectorsRoute, (c) => {
  throw new Error('Not implemented')
})
