import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDeleteProfileHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
