import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2CdnEndpointsCdnIdCacheRoute,
  deleteV2CdnEndpointsCdnIdRoute,
  getV2CdnEndpointsCdnIdRoute,
  getV2CdnEndpointsRoute,
  postV2CdnEndpointsRoute,
  putV2CdnEndpointsCdnIdRoute,
} from '../routes'

export const getV2CdnEndpointsRouteHandler: RouteHandler<typeof getV2CdnEndpointsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2CdnEndpointsRouteHandler: RouteHandler<typeof postV2CdnEndpointsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2CdnEndpointsCdnIdRouteHandler: RouteHandler<
  typeof deleteV2CdnEndpointsCdnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CdnEndpointsCdnIdRouteHandler: RouteHandler<
  typeof getV2CdnEndpointsCdnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2CdnEndpointsCdnIdRouteHandler: RouteHandler<
  typeof putV2CdnEndpointsCdnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CdnEndpointsCdnIdCacheRouteHandler: RouteHandler<
  typeof deleteV2CdnEndpointsCdnIdCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}
