import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624TagResourceHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
