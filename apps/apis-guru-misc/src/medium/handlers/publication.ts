import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPublicationIdForPublicationSlugRoute,
  getPublicationPublicationIdArticlesRoute,
  getPublicationPublicationIdNewsletterRoute,
  getPublicationPublicationIdRoute,
} from '../routes'

export const getPublicationIdForPublicationSlugRouteHandler: RouteHandler<
  typeof getPublicationIdForPublicationSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPublicationPublicationIdRouteHandler: RouteHandler<
  typeof getPublicationPublicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPublicationPublicationIdArticlesRouteHandler: RouteHandler<
  typeof getPublicationPublicationIdArticlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPublicationPublicationIdNewsletterRouteHandler: RouteHandler<
  typeof getPublicationPublicationIdNewsletterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
