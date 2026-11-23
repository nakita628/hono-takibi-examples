import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSamlConnectionsSamlConnectionIdRoute,
  getSamlConnectionsRoute,
  getSamlConnectionsSamlConnectionIdRoute,
  patchSamlConnectionsSamlConnectionIdRoute,
  postSamlConnectionsRoute,
} from '../routes'

export const getSamlConnectionsRouteHandler: RouteHandler<typeof getSamlConnectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSamlConnectionsRouteHandler: RouteHandler<
  typeof postSamlConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSamlConnectionsSamlConnectionIdRouteHandler: RouteHandler<
  typeof getSamlConnectionsSamlConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSamlConnectionsSamlConnectionIdRouteHandler: RouteHandler<
  typeof patchSamlConnectionsSamlConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSamlConnectionsSamlConnectionIdRouteHandler: RouteHandler<
  typeof deleteSamlConnectionsSamlConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
