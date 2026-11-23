import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsHandler =
  app.openapi(
    postXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
