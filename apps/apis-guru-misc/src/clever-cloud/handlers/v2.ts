import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2ProvidersAddonMatomoResourcesMatomoIdRoute,
  postV2ProvidersAddonMatomoResourcesRoute,
} from '../routes'

export const postV2ProvidersAddonMatomoResourcesRouteHandler: RouteHandler<
  typeof postV2ProvidersAddonMatomoResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2ProvidersAddonMatomoResourcesMatomoIdRouteHandler: RouteHandler<
  typeof deleteV2ProvidersAddonMatomoResourcesMatomoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
