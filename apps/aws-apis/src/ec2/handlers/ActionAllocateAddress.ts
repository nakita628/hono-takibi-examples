import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAllocateAddressRoute, postActionAllocateAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAllocateAddressHandler = app
  .openapi(getActionAllocateAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAllocateAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
