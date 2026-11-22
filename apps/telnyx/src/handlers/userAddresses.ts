import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserAddresses2Route,
  getUserAddressesId2Route,
  getUserAddressesIdRoute,
  getUserAddressesRoute,
  postUserAddresses2Route,
  postUserAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAddressesHandler = app
  .openapi(getUserAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAddressesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAddresses2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserAddresses2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAddressesId2Route, (c) => {
    throw new Error('Not implemented')
  })
