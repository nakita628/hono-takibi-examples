import { OpenAPIHono } from '@hono/zod-openapi'
import { putApiV1ServerRedundancyHostRoute } from '../routes'

const app = new OpenAPIHono()

export const instanceRedundancyHandler = app.openapi(putApiV1ServerRedundancyHostRoute, (c) => {
  throw new Error('Not implemented')
})
