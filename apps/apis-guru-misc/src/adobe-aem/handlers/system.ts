import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSystemConsoleBundlesNameJsonRoute,
  getSystemConsoleConfigMgrRoute,
  getSystemConsoleStatusProductinfoJsonRoute,
  getSystemHealthRoute,
  postSystemConsoleBundlesNameRoute,
  postSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerRoute,
  postSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionRoute,
} from '../routes'

export const postSystemConsoleBundlesNameRouteHandler: RouteHandler<
  typeof postSystemConsoleBundlesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemConsoleBundlesNameJsonRouteHandler: RouteHandler<
  typeof getSystemConsoleBundlesNameJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemConsoleConfigMgrRouteHandler: RouteHandler<
  typeof getSystemConsoleConfigMgrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerRouteHandler: RouteHandler<
  typeof postSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionRouteHandler: RouteHandler<
  typeof postSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemConsoleStatusProductinfoJsonRouteHandler: RouteHandler<
  typeof getSystemConsoleStatusProductinfoJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemHealthRouteHandler: RouteHandler<typeof getSystemHealthRoute> = async (c) => {
  throw new Error('Not implemented')
}
