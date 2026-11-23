import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSourcesIdRoute,
  getSourcesIdRoute,
  getSourcesRoute,
  postSourcesRoute,
  putSourcesIdArchiveRoute,
  putSourcesIdDisableRoute,
  putSourcesIdEnableRoute,
  putSourcesIdRoute,
  putSourcesIdUnarchiveRoute,
  putSourcesRoute,
} from '../routes'

export const getSourcesRouteHandler: RouteHandler<typeof getSourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesRouteHandler: RouteHandler<typeof postSourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesRouteHandler: RouteHandler<typeof putSourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesIdRouteHandler: RouteHandler<typeof getSourcesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesIdRouteHandler: RouteHandler<typeof putSourcesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesIdRouteHandler: RouteHandler<typeof deleteSourcesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesIdDisableRouteHandler: RouteHandler<
  typeof putSourcesIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesIdArchiveRouteHandler: RouteHandler<
  typeof putSourcesIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesIdEnableRouteHandler: RouteHandler<typeof putSourcesIdEnableRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSourcesIdUnarchiveRouteHandler: RouteHandler<
  typeof putSourcesIdUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
