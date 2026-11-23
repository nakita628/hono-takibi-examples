import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCrawlIdRoute,
  getCrawlActiveRoute,
  getCrawlIdErrorsRoute,
  getCrawlIdRoute,
  postCrawlParamsPreviewRoute,
  postCrawlRoute,
} from '../routes'

export const getCrawlIdRouteHandler: RouteHandler<typeof getCrawlIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCrawlIdRouteHandler: RouteHandler<typeof deleteCrawlIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCrawlIdErrorsRouteHandler: RouteHandler<typeof getCrawlIdErrorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCrawlRouteHandler: RouteHandler<typeof postCrawlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCrawlParamsPreviewRouteHandler: RouteHandler<
  typeof postCrawlParamsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCrawlActiveRouteHandler: RouteHandler<typeof getCrawlActiveRoute> = async (c) => {
  throw new Error('Not implemented')
}
