import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630CreateStorediSCSIVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630CreateStorediScsiVolumeHandler = app.openapi(
  postXAmzTargetStorageGateway20130630CreateStorediSCSIVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
