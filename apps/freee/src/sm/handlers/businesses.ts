import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBusinessesIdRoute,
  getBusinessesRoute,
  patchBusinessesIdRoute,
  postBusinessesIdCancellationRoute,
  postBusinessesIdCloseRoute,
  postBusinessesIdReopenRoute,
  postBusinessesRoute,
} from '../routes'

export const getBusinessesRouteHandler: RouteHandler<typeof getBusinessesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBusinessesRouteHandler: RouteHandler<typeof postBusinessesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBusinessesIdRouteHandler: RouteHandler<typeof getBusinessesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBusinessesIdRouteHandler: RouteHandler<typeof patchBusinessesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBusinessesIdCancellationRouteHandler: RouteHandler<
  typeof postBusinessesIdCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBusinessesIdCloseRouteHandler: RouteHandler<
  typeof postBusinessesIdCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBusinessesIdReopenRouteHandler: RouteHandler<
  typeof postBusinessesIdReopenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
