import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAddressesRoute,
  getPostcodesPostcodeRoute,
  getUdprnUdprnRoute,
  getUmprnUmprnRoute,
  postCleanseAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ukHandler = app
  .openapi(getAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCleanseAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostcodesPostcodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUdprnUdprnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUmprnUmprnRoute, (c) => {
    throw new Error('Not implemented')
  })
