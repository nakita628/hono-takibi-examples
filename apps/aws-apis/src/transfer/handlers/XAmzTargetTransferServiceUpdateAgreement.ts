import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceUpdateAgreementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceUpdateAgreementHandler = app.openapi(
  postXAmzTargetTransferServiceUpdateAgreementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
