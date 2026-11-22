import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1AddressesAddressIdRoute } from '../routes'

const app = new OpenAPIHono()

export const addressesAddressIdHandler = app.openapi(deleteV1AddressesAddressIdRoute, (c) => {
  throw new Error('Not implemented')
})
