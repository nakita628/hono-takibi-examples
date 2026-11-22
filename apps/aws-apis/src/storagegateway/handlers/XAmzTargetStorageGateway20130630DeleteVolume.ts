import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DeleteVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DeleteVolumeHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DeleteVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
