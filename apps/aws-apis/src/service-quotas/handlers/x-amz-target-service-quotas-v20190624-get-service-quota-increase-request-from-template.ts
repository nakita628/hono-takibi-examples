import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateHandler =
  app.openapi(
    postXAmzTargetServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
