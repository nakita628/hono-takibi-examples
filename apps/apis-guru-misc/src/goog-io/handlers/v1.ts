import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1CrawlQueryRoute,
  getV1ImagesQueryRoute,
  getV1NewsQueryRoute,
  getV1SearchQueryRoute,
  postV1SerpIndexRoute,
} from '../routes'

export const getV1CrawlQueryRouteHandler: RouteHandler<typeof getV1CrawlQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ImagesQueryRouteHandler: RouteHandler<typeof getV1ImagesQueryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1NewsQueryRouteHandler: RouteHandler<typeof getV1NewsQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SearchQueryRouteHandler: RouteHandler<typeof getV1SearchQueryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SerpIndexRouteHandler: RouteHandler<typeof postV1SerpIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
