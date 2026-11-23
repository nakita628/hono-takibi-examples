import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getExtensionsConfigurationsRoute,
  getExtensionsJwtSecretsRoute,
  getExtensionsLiveRoute,
  getExtensionsReleasedRoute,
  getExtensionsRoute,
  getExtensionsTransactionsRoute,
  postExtensionsChatRoute,
  postExtensionsJwtSecretsRoute,
  postExtensionsPubsubRoute,
  putExtensionsConfigurationsRoute,
  putExtensionsRequiredConfigurationRoute,
} from '../routes'

export const getExtensionsTransactionsRouteHandler: RouteHandler<
  typeof getExtensionsTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExtensionsConfigurationsRouteHandler: RouteHandler<
  typeof getExtensionsConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putExtensionsConfigurationsRouteHandler: RouteHandler<
  typeof putExtensionsConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putExtensionsRequiredConfigurationRouteHandler: RouteHandler<
  typeof putExtensionsRequiredConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postExtensionsPubsubRouteHandler: RouteHandler<
  typeof postExtensionsPubsubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExtensionsLiveRouteHandler: RouteHandler<typeof getExtensionsLiveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getExtensionsJwtSecretsRouteHandler: RouteHandler<
  typeof getExtensionsJwtSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postExtensionsJwtSecretsRouteHandler: RouteHandler<
  typeof postExtensionsJwtSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postExtensionsChatRouteHandler: RouteHandler<typeof postExtensionsChatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getExtensionsRouteHandler: RouteHandler<typeof getExtensionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getExtensionsReleasedRouteHandler: RouteHandler<
  typeof getExtensionsReleasedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
