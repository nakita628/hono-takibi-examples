import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEventsDeleteEventIdRoute,
  getEventsRoute,
  getEventsViewEventIdRoute,
  postEventsAddRoute,
  postEventsAddTagEventIdTagIdLocalLocalRoute,
  postEventsEnrichEventEventIdRoute,
  postEventsIndexRoute,
  postEventsPublishEventIdRoute,
  postEventsRemoveTagEventIdTagIdRoute,
  postEventsRestSearchRoute,
  postEventsUnpublishEventIdRoute,
  putEventsEditEventIdRoute,
} from '../routes'

export const postEventsRestSearchRouteHandler: RouteHandler<
  typeof postEventsRestSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsAddRouteHandler: RouteHandler<typeof postEventsAddRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putEventsEditEventIdRouteHandler: RouteHandler<
  typeof putEventsEditEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEventsDeleteEventIdRouteHandler: RouteHandler<
  typeof deleteEventsDeleteEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsIndexRouteHandler: RouteHandler<typeof postEventsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsViewEventIdRouteHandler: RouteHandler<
  typeof getEventsViewEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsPublishEventIdRouteHandler: RouteHandler<
  typeof postEventsPublishEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsUnpublishEventIdRouteHandler: RouteHandler<
  typeof postEventsUnpublishEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsAddTagEventIdTagIdLocalLocalRouteHandler: RouteHandler<
  typeof postEventsAddTagEventIdTagIdLocalLocalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsRemoveTagEventIdTagIdRouteHandler: RouteHandler<
  typeof postEventsRemoveTagEventIdTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsEnrichEventEventIdRouteHandler: RouteHandler<
  typeof postEventsEnrichEventEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
