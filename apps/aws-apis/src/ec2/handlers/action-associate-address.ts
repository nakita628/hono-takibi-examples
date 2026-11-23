import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAssociateAddressRoute, postActionAssociateAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAssociateAddressHandler = app
  .openapi(getActionAssociateAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
