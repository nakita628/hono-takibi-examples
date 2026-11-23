import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteAgreementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDeleteAgreementHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteAgreementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
