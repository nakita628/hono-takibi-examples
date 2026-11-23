import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1alphaNameRoute,
  getV1alphaNameRoute,
  getV1alphaParentInstancesRoute,
  getV1alphaParentWorkerpoolsRoute,
  patchV1alphaNameRoute,
  postV1alphaNameTestNotifyRoute,
  postV1alphaParentInstancesRoute,
  postV1alphaParentWorkerpoolsRoute,
} from '../routes'

export const deleteV1alphaNameRouteHandler: RouteHandler<typeof deleteV1alphaNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1alphaNameRouteHandler: RouteHandler<typeof getV1alphaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1alphaNameRouteHandler: RouteHandler<typeof patchV1alphaNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1alphaNameTestNotifyRouteHandler: RouteHandler<
  typeof postV1alphaNameTestNotifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alphaParentInstancesRouteHandler: RouteHandler<
  typeof getV1alphaParentInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alphaParentInstancesRouteHandler: RouteHandler<
  typeof postV1alphaParentInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alphaParentWorkerpoolsRouteHandler: RouteHandler<
  typeof getV1alphaParentWorkerpoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alphaParentWorkerpoolsRouteHandler: RouteHandler<
  typeof postV1alphaParentWorkerpoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
