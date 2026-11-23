import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSearchDocumentsReindexStatusRoute,
  getSearchRoute,
  postSearchDocumentsReindexRoute,
} from '../routes'

export const getSearchRouteHandler: RouteHandler<typeof getSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchDocumentsReindexRouteHandler: RouteHandler<
  typeof postSearchDocumentsReindexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchDocumentsReindexStatusRouteHandler: RouteHandler<
  typeof getSearchDocumentsReindexStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
