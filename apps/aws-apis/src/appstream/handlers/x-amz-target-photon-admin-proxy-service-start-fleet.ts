import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceStartFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceStartFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceStartFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
