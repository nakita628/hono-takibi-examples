import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLibsGraniteCoreContentLoginHtmlRoute,
  getLibsGraniteSecurityTruststoreJsonRoute,
  postLibsGraniteSecurityPostAuthorizablesRoute,
  postLibsGraniteSecurityPostSslSetupHtmlRoute,
  postLibsGraniteSecurityPostTruststoreRoute,
  postLibsReplicationTreeactivationHtmlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const libsHandler = app
  .openapi(getLibsGraniteCoreContentLoginHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibsGraniteSecurityPostAuthorizablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibsGraniteSecurityPostSslSetupHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibsGraniteSecurityPostTruststoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibsGraniteSecurityTruststoreJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLibsReplicationTreeactivationHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
