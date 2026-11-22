import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postListFailedIPNsRoute,
  postListSubscribedAddressesRoute,
  postResendFailedIPNRoute,
  postSubscribeAddressRoute,
  postUnsubscribeAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionIPNRequestsHandler = app
  .openapi(postListFailedIPNsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListSubscribedAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResendFailedIPNRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscribeAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnsubscribeAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
