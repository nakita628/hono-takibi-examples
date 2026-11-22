import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSystemConsoleBundlesNameJsonRoute,
  getSystemConsoleConfigMgrRoute,
  getSystemConsoleStatusProductinfoJsonRoute,
  postSystemConsoleBundlesNameRoute,
  postSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerRoute,
  postSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consoleHandler = app
  .openapi(postSystemConsoleBundlesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemConsoleBundlesNameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemConsoleConfigMgrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemConsoleStatusProductinfoJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
