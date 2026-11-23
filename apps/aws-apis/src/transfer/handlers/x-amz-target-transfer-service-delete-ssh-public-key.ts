import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteSshPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDeleteSshPublicKeyHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteSshPublicKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
