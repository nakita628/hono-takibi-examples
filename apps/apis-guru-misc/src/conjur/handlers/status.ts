import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthenticatorServiceIdAccountStatusRoute,
  getAuthenticatorsRoute,
  getAuthnGcpAccountStatusRoute,
  getHealthRoute,
  getInfoRoute,
  getRemoteHealthRemoteRoute,
  getWhoamiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app
  .openapi(getAuthenticatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthnGcpAccountStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRemoteHealthRemoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhoamiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorServiceIdAccountStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
