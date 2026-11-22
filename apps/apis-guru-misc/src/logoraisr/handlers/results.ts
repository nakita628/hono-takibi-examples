import { OpenAPIHono } from '@hono/zod-openapi'
import { getResultsResultFileIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const resultsHandler = app.openapi(getResultsResultFileIdIndexRoute, (c) => {
  throw new Error('Not implemented')
})
