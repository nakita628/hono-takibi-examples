import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630UpdateSmbFileShareVisibilityHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
