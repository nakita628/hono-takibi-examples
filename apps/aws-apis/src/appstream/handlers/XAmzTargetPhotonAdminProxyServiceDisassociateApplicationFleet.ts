import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
