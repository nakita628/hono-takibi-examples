import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeFleetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDescribeFleetsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeFleetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
