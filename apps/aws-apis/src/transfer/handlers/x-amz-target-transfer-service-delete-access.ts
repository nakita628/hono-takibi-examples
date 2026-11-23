import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDeleteAccessHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
