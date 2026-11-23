import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVersionsIdRoute,
  deleteVersionsRoute,
  getVersionsIdCompareRoute,
  getVersionsIdRoute,
  getVersionsRoute,
  patchVersionsIdRoute,
  patchVersionsRoute,
  postVersionsIdPromoteRoute,
  postVersionsIdSaveRoute,
  postVersionsRoute,
} from '../routes'

export const getVersionsRouteHandler: RouteHandler<typeof getVersionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVersionsRouteHandler: RouteHandler<typeof postVersionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchVersionsRouteHandler: RouteHandler<typeof patchVersionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVersionsRouteHandler: RouteHandler<typeof deleteVersionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVersionsIdRouteHandler: RouteHandler<typeof getVersionsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchVersionsIdRouteHandler: RouteHandler<typeof patchVersionsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVersionsIdRouteHandler: RouteHandler<typeof deleteVersionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVersionsIdSaveRouteHandler: RouteHandler<typeof postVersionsIdSaveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getVersionsIdCompareRouteHandler: RouteHandler<
  typeof getVersionsIdCompareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVersionsIdPromoteRouteHandler: RouteHandler<
  typeof postVersionsIdPromoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
