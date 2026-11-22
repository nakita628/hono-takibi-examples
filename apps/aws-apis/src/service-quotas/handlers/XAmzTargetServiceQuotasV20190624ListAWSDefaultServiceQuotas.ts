import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
