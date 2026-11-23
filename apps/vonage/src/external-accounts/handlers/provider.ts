import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProviderExternalIdApplicationsApplicationIdRoute,
  postProviderExternalIdApplicationsRoute,
} from '../routes'

export const postProviderExternalIdApplicationsRouteHandler: RouteHandler<
  typeof postProviderExternalIdApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProviderExternalIdApplicationsApplicationIdRouteHandler: RouteHandler<
  typeof deleteProviderExternalIdApplicationsApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
