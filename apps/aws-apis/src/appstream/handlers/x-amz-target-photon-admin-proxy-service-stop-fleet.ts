import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceStopFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceStopFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceStopFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
