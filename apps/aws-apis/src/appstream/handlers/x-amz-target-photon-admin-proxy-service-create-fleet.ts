import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCreateFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
