import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateHandler =
  app.openapi(
    postXAmzTargetServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
