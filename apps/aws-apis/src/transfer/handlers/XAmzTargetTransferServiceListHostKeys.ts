import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListHostKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceListHostKeysHandler = app.openapi(
  postXAmzTargetTransferServiceListHostKeysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
