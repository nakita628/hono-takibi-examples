import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProvidersProviderRoute,
  getProvidersProviderTemplatesRoute,
  getProvidersRoute,
} from '../routes'

export const getProvidersRouteHandler: RouteHandler<typeof getProvidersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersProviderRouteHandler: RouteHandler<
  typeof getProvidersProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersProviderTemplatesRouteHandler: RouteHandler<
  typeof getProvidersProviderTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
