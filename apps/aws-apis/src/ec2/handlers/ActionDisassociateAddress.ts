import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDisassociateAddressRoute, postActionDisassociateAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDisassociateAddressHandler = app
  .openapi(getActionDisassociateAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
