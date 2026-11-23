import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListAccessesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceListAccessesHandler = app.openapi(
  postXAmzTargetTransferServiceListAccessesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
