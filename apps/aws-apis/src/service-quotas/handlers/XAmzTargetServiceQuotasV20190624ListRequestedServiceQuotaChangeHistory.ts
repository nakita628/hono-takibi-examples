import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryHandler =
  app.openapi(
    postXAmzTargetServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
