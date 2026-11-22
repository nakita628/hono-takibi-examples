import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ListVolumesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630ListVolumesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ListVolumesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
