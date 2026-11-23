import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getListsIdActionsRoute,
  getListsIdBoardRoute,
  getListsIdCardsRoute,
  getListsIdRoute,
  postListsIdArchiveAllCardsRoute,
  postListsIdMoveAllCardsRoute,
  postListsRoute,
  putListsIdClosedRoute,
  putListsIdFieldRoute,
  putListsIdIdBoardRoute,
  putListsIdRoute,
} from '../routes'

export const getListsIdRouteHandler: RouteHandler<typeof getListsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putListsIdRouteHandler: RouteHandler<typeof putListsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postListsRouteHandler: RouteHandler<typeof postListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postListsIdArchiveAllCardsRouteHandler: RouteHandler<
  typeof postListsIdArchiveAllCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postListsIdMoveAllCardsRouteHandler: RouteHandler<
  typeof postListsIdMoveAllCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putListsIdClosedRouteHandler: RouteHandler<typeof putListsIdClosedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putListsIdIdBoardRouteHandler: RouteHandler<typeof putListsIdIdBoardRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putListsIdFieldRouteHandler: RouteHandler<typeof putListsIdFieldRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsIdActionsRouteHandler: RouteHandler<typeof getListsIdActionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getListsIdBoardRouteHandler: RouteHandler<typeof getListsIdBoardRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsIdCardsRouteHandler: RouteHandler<typeof getListsIdCardsRoute> = async (c) => {
  throw new Error('Not implemented')
}
