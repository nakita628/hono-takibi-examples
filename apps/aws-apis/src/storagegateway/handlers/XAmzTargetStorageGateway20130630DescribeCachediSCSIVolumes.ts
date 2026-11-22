import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeCachediSCSIVolumesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DescribeCachediSCSIVolumesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeCachediSCSIVolumesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
