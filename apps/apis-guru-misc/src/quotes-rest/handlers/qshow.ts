import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteQshowRoute,
  getQshowListRoute,
  getQshowQuotesRoute,
  getQshowRoute,
  patchQshowRoute,
  postQshowQuotesAddRoute,
  postQshowQuotesRemoveRoute,
  putQshowRoute,
} from '../routes'

export const deleteQshowRouteHandler: RouteHandler<typeof deleteQshowRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQshowRouteHandler: RouteHandler<typeof getQshowRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchQshowRouteHandler: RouteHandler<typeof patchQshowRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putQshowRouteHandler: RouteHandler<typeof putQshowRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQshowListRouteHandler: RouteHandler<typeof getQshowListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQshowQuotesRouteHandler: RouteHandler<typeof getQshowQuotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQshowQuotesAddRouteHandler: RouteHandler<typeof postQshowQuotesAddRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postQshowQuotesRemoveRouteHandler: RouteHandler<
  typeof postQshowQuotesRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
