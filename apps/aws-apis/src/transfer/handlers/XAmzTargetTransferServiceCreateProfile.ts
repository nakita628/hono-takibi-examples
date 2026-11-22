import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceCreateProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceCreateProfileHandler = app.openapi(
  postXAmzTargetTransferServiceCreateProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
