import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnomaliesIdRoute, postAnomaliesInsightInsightIdRoute } from '../routes'

const app = new OpenAPIHono()

export const anomaliesHandler = app
  .openapi(getAnomaliesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnomaliesInsightInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
