import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630CreateSMBFileShareRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630CreateSmbFileShareHandler = app.openapi(
  postXAmzTargetStorageGateway20130630CreateSMBFileShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
