import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiVersionNetworkingIpv4AssignRoute,
  postApiVersionNetworkingIpv4ShareRoute,
} from '../routes'

const app = new OpenAPIHono()

export const iPv4AddressesHandler = app
  .openapi(postApiVersionNetworkingIpv4AssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingIpv4ShareRoute, (c) => {
    throw new Error('Not implemented')
  })
