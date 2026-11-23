import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateHandler =
  app.openapi(
    postXAmzTargetServiceQuotasV20190624GetAssociationForServiceQuotaTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
