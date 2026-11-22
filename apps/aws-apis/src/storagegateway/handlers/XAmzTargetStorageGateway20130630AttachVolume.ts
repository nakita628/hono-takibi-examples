import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630AttachVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630AttachVolumeHandler = app.openapi(
  postXAmzTargetStorageGateway20130630AttachVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
