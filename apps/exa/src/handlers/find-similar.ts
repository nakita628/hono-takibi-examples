import { OpenAPIHono } from '@hono/zod-openapi'
import { postFindSimilarRoute } from '../routes'

const app = new OpenAPIHono()

export const findSimilarHandler = app.openapi(postFindSimilarRoute, (c) => {
  throw new Error('Not implemented')
})
