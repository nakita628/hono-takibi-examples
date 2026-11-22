import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetServiceQuotasV20190624UntagResourceHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
