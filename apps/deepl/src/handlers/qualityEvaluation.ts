import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1QualityEvaluationsJobIdRoute } from '../routes'

const app = new OpenAPIHono()

export const qualityEvaluationHandler = app.openapi(getV1QualityEvaluationsJobIdRoute, (c) => {
  throw new Error('Not implemented')
})
