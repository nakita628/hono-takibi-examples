import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBatchScrapeIdRoute,
  getBatchScrapeIdErrorsRoute,
  getBatchScrapeIdRoute,
  postBatchScrapeRoute,
} from '../routes'

export const postBatchScrapeRouteHandler: RouteHandler<typeof postBatchScrapeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBatchScrapeIdRouteHandler: RouteHandler<typeof getBatchScrapeIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteBatchScrapeIdRouteHandler: RouteHandler<
  typeof deleteBatchScrapeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBatchScrapeIdErrorsRouteHandler: RouteHandler<
  typeof getBatchScrapeIdErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
