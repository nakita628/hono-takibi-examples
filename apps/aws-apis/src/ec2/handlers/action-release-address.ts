import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionReleaseAddressRoute, postActionReleaseAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const actionReleaseAddressHandler = app
  .openapi(getActionReleaseAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionReleaseAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
