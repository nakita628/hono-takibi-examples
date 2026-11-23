import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624DisassociateServiceQuotaTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
