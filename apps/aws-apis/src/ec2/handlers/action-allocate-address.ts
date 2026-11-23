import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAllocateAddressRoute, postActionAllocateAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAllocateAddressHandler = app
  .openapi(getActionAllocateAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAllocateAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
