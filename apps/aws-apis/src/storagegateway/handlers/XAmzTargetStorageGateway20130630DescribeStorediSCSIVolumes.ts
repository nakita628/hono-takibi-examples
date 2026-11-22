import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeStorediSCSIVolumesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DescribeStorediSCSIVolumesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeStorediSCSIVolumesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
