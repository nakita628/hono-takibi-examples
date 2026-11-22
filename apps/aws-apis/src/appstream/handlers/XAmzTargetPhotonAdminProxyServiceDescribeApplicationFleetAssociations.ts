import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsHandler =
  app.openapi(
    postXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
