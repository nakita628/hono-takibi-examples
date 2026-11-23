import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactAddressesIdIndexRoute,
  getContactAddressesIndexRoute,
  patchContactAddressesIdIndexRoute,
  postContactAddressesIndexRoute,
  putContactAddressesIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactAddressesHandler = app
  .openapi(getContactAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
