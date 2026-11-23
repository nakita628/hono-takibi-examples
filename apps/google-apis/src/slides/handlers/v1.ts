import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1PresentationsPresentationIdPagesPageObjectIdRoute,
  getV1PresentationsPresentationIdPagesPageObjectIdThumbnailRoute,
  getV1PresentationsPresentationIdRoute,
  postV1PresentationsPresentationIdBatchUpdateRoute,
  postV1PresentationsRoute,
} from '../routes'

export const postV1PresentationsRouteHandler: RouteHandler<
  typeof postV1PresentationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PresentationsPresentationIdRouteHandler: RouteHandler<
  typeof getV1PresentationsPresentationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PresentationsPresentationIdPagesPageObjectIdRouteHandler: RouteHandler<
  typeof getV1PresentationsPresentationIdPagesPageObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PresentationsPresentationIdPagesPageObjectIdThumbnailRouteHandler: RouteHandler<
  typeof getV1PresentationsPresentationIdPagesPageObjectIdThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PresentationsPresentationIdBatchUpdateRouteHandler: RouteHandler<
  typeof postV1PresentationsPresentationIdBatchUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
