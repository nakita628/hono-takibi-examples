import { OpenAPIHono } from '@hono/zod-openapi'
import { postContentproSimilarTextRoute } from '../routes'

const app = new OpenAPIHono()

export const contentproSimilarTextHandler = app.openapi(postContentproSimilarTextRoute, (c) => {
  throw new Error('Not implemented')
})
