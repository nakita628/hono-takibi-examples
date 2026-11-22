import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAddressesAddressKeysKeyRoute,
  getAddressesAddressKeysKeyRoute,
  getAddressesAddressKeysRoute,
  postAddressesAddressKeysRoute,
  putAddressesAddressKeysKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
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
