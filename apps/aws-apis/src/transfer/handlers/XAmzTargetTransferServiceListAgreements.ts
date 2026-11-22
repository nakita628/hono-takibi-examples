import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListAgreementsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceListAgreementsHandler = app.openapi(
  postXAmzTargetTransferServiceListAgreementsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
