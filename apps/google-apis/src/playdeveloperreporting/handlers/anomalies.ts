import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1ParentAnomaliesRoute } from '../routes'

const app = new OpenAPIHono()

export const anomaliesHandler = app.openapi(getV1beta1ParentAnomaliesRoute, (c) => {
  throw new Error('Not implemented')
})
