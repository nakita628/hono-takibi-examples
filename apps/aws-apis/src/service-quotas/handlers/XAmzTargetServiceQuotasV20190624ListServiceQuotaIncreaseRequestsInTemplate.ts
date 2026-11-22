import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateHandler =
  app.openapi(
    postXAmzTargetServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
