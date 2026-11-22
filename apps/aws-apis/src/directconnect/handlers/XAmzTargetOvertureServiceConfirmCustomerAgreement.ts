import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceConfirmCustomerAgreementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceConfirmCustomerAgreementHandler = app.openapi(
  postXAmzTargetOvertureServiceConfirmCustomerAgreementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
