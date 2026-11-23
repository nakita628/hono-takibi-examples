import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaHandler =
  app.openapi(
    postXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuotaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
