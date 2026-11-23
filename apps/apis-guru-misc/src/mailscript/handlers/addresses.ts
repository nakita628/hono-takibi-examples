import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAddressesAddressKeysKeyRoute,
  deleteAddressesAddressRoute,
  getAddressesAddressKeysKeyRoute,
  getAddressesAddressKeysRoute,
  getAddressesRoute,
  postAddressesAddressKeysRoute,
  postAddressesRoute,
  putAddressesAddressKeysKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addressesHandler = app
  .openapi(getAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAddressesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddressesAddressKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAddressesAddressKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAddressesAddressKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddressesAddressKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAddressesAddressKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
