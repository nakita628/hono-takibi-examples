import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630CreateSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630CreateSnapshotHandler = app.openapi(
  postXAmzTargetStorageGateway20130630CreateSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
