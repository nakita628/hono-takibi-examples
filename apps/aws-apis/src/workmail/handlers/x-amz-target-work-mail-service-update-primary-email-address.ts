import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceUpdatePrimaryEmailAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceUpdatePrimaryEmailAddressHandler = app.openapi(
  postXAmzTargetWorkMailServiceUpdatePrimaryEmailAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
