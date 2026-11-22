import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDeleteUserHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
