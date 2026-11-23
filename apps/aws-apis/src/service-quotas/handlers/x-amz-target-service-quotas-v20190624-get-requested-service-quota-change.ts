import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624GetRequestedServiceQuotaChangeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
