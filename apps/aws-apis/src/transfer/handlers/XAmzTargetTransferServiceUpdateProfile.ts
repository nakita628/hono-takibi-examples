import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceUpdateProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceUpdateProfileHandler = app.openapi(
  postXAmzTargetTransferServiceUpdateProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
