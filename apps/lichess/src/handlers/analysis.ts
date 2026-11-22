import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiCloudEvalRoute } from '../routes'

const app = new OpenAPIHono()

export const analysisHandler = app.openapi(getApiCloudEvalRoute, (c) => {
  throw new Error('Not implemented')
})
