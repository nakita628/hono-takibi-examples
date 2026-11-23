import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624AssociateServiceQuotaTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
