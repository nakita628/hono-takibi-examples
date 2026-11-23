import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDeleteUserHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
