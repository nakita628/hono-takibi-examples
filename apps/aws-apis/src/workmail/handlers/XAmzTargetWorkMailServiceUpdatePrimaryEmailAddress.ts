import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceUpdatePrimaryEmailAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceUpdatePrimaryEmailAddressHandler = app.openapi(
  postXAmzTargetWorkMailServiceUpdatePrimaryEmailAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
