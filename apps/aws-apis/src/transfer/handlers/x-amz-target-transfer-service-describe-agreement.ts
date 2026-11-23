import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeAgreementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDescribeAgreementHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeAgreementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
