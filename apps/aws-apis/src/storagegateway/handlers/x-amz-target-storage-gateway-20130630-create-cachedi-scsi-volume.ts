import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630CreateCachediSCSIVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630CreateCachediScsiVolumeHandler = app.openapi(
  postXAmzTargetStorageGateway20130630CreateCachediSCSIVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
