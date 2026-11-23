import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOriginEndpointsIdRoute,
  getOriginEndpointsIdRoute,
  getOriginEndpointsRoute,
  postOriginEndpointsRoute,
  putOriginEndpointsIdRoute,
} from '../routes'

export const postOriginEndpointsRouteHandler: RouteHandler<
  typeof postOriginEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOriginEndpointsRouteHandler: RouteHandler<typeof getOriginEndpointsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteOriginEndpointsIdRouteHandler: RouteHandler<
  typeof deleteOriginEndpointsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOriginEndpointsIdRouteHandler: RouteHandler<
  typeof getOriginEndpointsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOriginEndpointsIdRouteHandler: RouteHandler<
  typeof putOriginEndpointsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
