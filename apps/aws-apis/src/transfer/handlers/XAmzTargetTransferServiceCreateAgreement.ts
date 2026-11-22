import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceCreateAgreementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceCreateAgreementHandler = app.openapi(
  postXAmzTargetTransferServiceCreateAgreementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
