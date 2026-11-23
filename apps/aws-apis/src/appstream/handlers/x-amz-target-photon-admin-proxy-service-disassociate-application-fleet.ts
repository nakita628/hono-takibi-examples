import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
