import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScrapeJobIdInteractRoute,
  getScrapeJobIdRoute,
  postScrapeJobIdInteractRoute,
  postScrapeRoute,
} from '../routes'

export const postScrapeRouteHandler: RouteHandler<typeof postScrapeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postScrapeJobIdInteractRouteHandler: RouteHandler<
  typeof postScrapeJobIdInteractRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteScrapeJobIdInteractRouteHandler: RouteHandler<
  typeof deleteScrapeJobIdInteractRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScrapeJobIdRouteHandler: RouteHandler<typeof getScrapeJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
