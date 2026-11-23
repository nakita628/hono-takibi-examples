import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceUpdateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceUpdateUserHandler = app.openapi(
  postXAmzTargetTransferServiceUpdateUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
