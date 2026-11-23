import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceUpdateProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceUpdateProfileHandler = app.openapi(
  postXAmzTargetTransferServiceUpdateProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
