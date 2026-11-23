import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624GetServiceQuotaRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624GetServiceQuotaHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624GetServiceQuotaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
