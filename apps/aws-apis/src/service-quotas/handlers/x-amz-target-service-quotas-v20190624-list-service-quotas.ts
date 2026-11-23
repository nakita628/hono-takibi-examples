import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624ListServiceQuotasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624ListServiceQuotasHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624ListServiceQuotasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
