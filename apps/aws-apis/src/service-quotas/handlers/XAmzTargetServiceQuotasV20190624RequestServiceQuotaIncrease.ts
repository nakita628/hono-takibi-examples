import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624RequestServiceQuotaIncreaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
