import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AnalysisCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const analysisCategoriesHandler = app.openapi(getV1AnalysisCategoriesRoute, (c) => {
  throw new Error('Not implemented')
})
