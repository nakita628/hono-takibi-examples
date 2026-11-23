import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRadarListsTypeActionRoute,
  postRadarAttemptsRoute,
  postRadarListsTypeActionRoute,
  putRadarAttemptsIdRoute,
} from '../routes'

export const postRadarAttemptsRouteHandler: RouteHandler<typeof postRadarAttemptsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putRadarAttemptsIdRouteHandler: RouteHandler<typeof putRadarAttemptsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRadarListsTypeActionRouteHandler: RouteHandler<
  typeof postRadarListsTypeActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRadarListsTypeActionRouteHandler: RouteHandler<
  typeof deleteRadarListsTypeActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
