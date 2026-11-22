import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateSMBFileShareRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630UpdateSMBFileShareHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateSMBFileShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
