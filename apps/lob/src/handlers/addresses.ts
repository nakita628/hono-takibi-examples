import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAddressesAdrIdRoute,
  getAddressesAdrIdRoute,
  getAddressesRoute,
  postAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addressesHandler = app
  .openapi(getAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddressesAdrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAddressesAdrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
