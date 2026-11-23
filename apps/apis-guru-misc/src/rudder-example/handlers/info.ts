import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInfoDetailsEndpointNameRoute,
  getInfoRoute,
  getInfoSectionIdRoute,
} from '../routes'

export const getInfoRouteHandler: RouteHandler<typeof getInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoDetailsEndpointNameRouteHandler: RouteHandler<
  typeof getInfoDetailsEndpointNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoSectionIdRouteHandler: RouteHandler<typeof getInfoSectionIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
