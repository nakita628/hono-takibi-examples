import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceCreateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceCreateUserHandler = app.openapi(
  postXAmzTargetTransferServiceCreateUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
