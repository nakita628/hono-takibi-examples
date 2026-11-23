import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDisassociateFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDisassociateFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDisassociateFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
