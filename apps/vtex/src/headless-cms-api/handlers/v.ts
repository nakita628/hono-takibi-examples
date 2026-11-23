import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVCmsApiBuilderIdContentTypeDocumentIdIndexRoute,
  getVCmsApiBuilderIdContentTypeRoute,
  getVCmsApiBuilderIdIndexRoute,
} from '../routes'

export const getVCmsApiBuilderIdIndexRouteHandler: RouteHandler<
  typeof getVCmsApiBuilderIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVCmsApiBuilderIdContentTypeRouteHandler: RouteHandler<
  typeof getVCmsApiBuilderIdContentTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVCmsApiBuilderIdContentTypeDocumentIdIndexRouteHandler: RouteHandler<
  typeof getVCmsApiBuilderIdContentTypeDocumentIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
