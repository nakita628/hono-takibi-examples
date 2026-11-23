import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceUpdateAgreementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceUpdateAgreementHandler = app.openapi(
  postXAmzTargetTransferServiceUpdateAgreementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
