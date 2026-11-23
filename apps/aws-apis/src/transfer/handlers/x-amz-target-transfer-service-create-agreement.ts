import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceCreateAgreementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceCreateAgreementHandler = app.openapi(
  postXAmzTargetTransferServiceCreateAgreementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
