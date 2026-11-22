import { OpenAPIHono } from '@hono/zod-openapi'
import { postSamplingStatisticSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const SamplingStatisticSummariesHandler = app.openapi(
  postSamplingStatisticSummariesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
