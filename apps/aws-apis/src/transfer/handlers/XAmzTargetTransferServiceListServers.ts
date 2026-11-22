import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListServersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceListServersHandler = app.openapi(
  postXAmzTargetTransferServiceListServersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
