import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DetachVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DetachVolumeHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DetachVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
