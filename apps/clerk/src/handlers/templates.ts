import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTemplatesTemplateTypeRoute,
  getTemplatesTemplateTypeSlugRoute,
  postTemplatesTemplateTypeSlugPreviewRoute,
  postTemplatesTemplateTypeSlugRevertRoute,
  postTemplatesTemplateTypeSlugToggleDeliveryRoute,
  putTemplatesTemplateTypeSlugRoute,
} from '../routes'

export const getTemplatesTemplateTypeRouteHandler: RouteHandler<
  typeof getTemplatesTemplateTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplatesTemplateTypeSlugRouteHandler: RouteHandler<
  typeof getTemplatesTemplateTypeSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTemplatesTemplateTypeSlugRouteHandler: RouteHandler<
  typeof putTemplatesTemplateTypeSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesTemplateTypeSlugRevertRouteHandler: RouteHandler<
  typeof postTemplatesTemplateTypeSlugRevertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesTemplateTypeSlugPreviewRouteHandler: RouteHandler<
  typeof postTemplatesTemplateTypeSlugPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesTemplateTypeSlugToggleDeliveryRouteHandler: RouteHandler<
  typeof postTemplatesTemplateTypeSlugToggleDeliveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
