import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateHandler =
  app.openapi(
    postXAmzTargetServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
