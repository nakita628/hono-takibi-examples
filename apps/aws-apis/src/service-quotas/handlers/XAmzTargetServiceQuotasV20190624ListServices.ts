import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624ListServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetServiceQuotasV20190624ListServicesHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624ListServicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
