import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEpisodesIdNextSiblingRoute,
  getEpisodesIdPreviousSiblingRoute,
  getEpisodesIdRoute,
  getEpisodesRoute,
} from '../routes'

export const getEpisodesRouteHandler: RouteHandler<typeof getEpisodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEpisodesIdRouteHandler: RouteHandler<typeof getEpisodesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEpisodesIdNextSiblingRouteHandler: RouteHandler<
  typeof getEpisodesIdNextSiblingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEpisodesIdPreviousSiblingRouteHandler: RouteHandler<
  typeof getEpisodesIdPreviousSiblingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
