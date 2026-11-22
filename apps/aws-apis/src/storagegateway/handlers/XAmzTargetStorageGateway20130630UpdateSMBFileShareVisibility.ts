import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
