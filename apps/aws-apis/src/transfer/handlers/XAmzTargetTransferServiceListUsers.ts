import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceListUsersHandler = app.openapi(
  postXAmzTargetTransferServiceListUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
