import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630CreateStorediSCSIVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630CreateStorediSCSIVolumeHandler = app.openapi(
  postXAmzTargetStorageGateway20130630CreateStorediSCSIVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
