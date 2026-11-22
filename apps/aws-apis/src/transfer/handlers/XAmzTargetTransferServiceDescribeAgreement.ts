import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeAgreementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDescribeAgreementHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeAgreementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
