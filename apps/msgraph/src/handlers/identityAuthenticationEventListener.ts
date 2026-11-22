import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityAuthenticationEventListenersAuthenticationEventListenerIdRoute,
  getIdentityAuthenticationEventListenersAuthenticationEventListenerIdRoute,
  getIdentityAuthenticationEventListenersCountRoute,
  getIdentityAuthenticationEventListenersRoute,
  patchIdentityAuthenticationEventListenersAuthenticationEventListenerIdRoute,
  postIdentityAuthenticationEventListenersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityAuthenticationEventListenerHandler = app
  .openapi(getIdentityAuthenticationEventListenersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityAuthenticationEventListenersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityAuthenticationEventListenersAuthenticationEventListenerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityAuthenticationEventListenersAuthenticationEventListenerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityAuthenticationEventListenersAuthenticationEventListenerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityAuthenticationEventListenersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
