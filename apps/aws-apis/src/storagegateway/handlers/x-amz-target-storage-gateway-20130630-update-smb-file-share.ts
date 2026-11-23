import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateSMBFileShareRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630UpdateSmbFileShareHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateSMBFileShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
