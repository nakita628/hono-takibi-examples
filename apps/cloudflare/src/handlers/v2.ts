import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2DomainSettingsRoute,
  getV2DomainTemplatesProvidersProviderServicesServiceRoute,
  getV2ProvconfProviderServiceAccountRoute,
} from '../routes'

export const getV2DomainTemplatesProvidersProviderServicesServiceRouteHandler: RouteHandler<
  typeof getV2DomainTemplatesProvidersProviderServicesServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ProvconfProviderServiceAccountRouteHandler: RouteHandler<
  typeof getV2ProvconfProviderServiceAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DomainSettingsRouteHandler: RouteHandler<
  typeof getV2DomainSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
