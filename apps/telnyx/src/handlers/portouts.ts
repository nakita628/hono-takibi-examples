import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPortoutsEventsIdRoute,
  getPortoutsEventsRoute,
  getPortoutsIdCommentsRoute,
  getPortoutsIdRoute,
  getPortoutsIdSupportingDocumentsRoute,
  getPortoutsRejectionsPortoutIdRoute,
  getPortoutsReportsIdRoute,
  getPortoutsReportsRoute,
  getPortoutsRoute,
  patchPortoutsIdStatusRoute,
  postPortoutsEventsIdRepublishRoute,
  postPortoutsIdCommentsRoute,
  postPortoutsIdSupportingDocumentsRoute,
  postPortoutsReportsRoute,
} from '../routes'

export const getPortoutsRouteHandler: RouteHandler<typeof getPortoutsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortoutsEventsRouteHandler: RouteHandler<typeof getPortoutsEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPortoutsEventsIdRouteHandler: RouteHandler<
  typeof getPortoutsEventsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPortoutsEventsIdRepublishRouteHandler: RouteHandler<
  typeof postPortoutsEventsIdRepublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortoutsRejectionsPortoutIdRouteHandler: RouteHandler<
  typeof getPortoutsRejectionsPortoutIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortoutsReportsRouteHandler: RouteHandler<typeof getPortoutsReportsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPortoutsReportsRouteHandler: RouteHandler<
  typeof postPortoutsReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortoutsReportsIdRouteHandler: RouteHandler<
  typeof getPortoutsReportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortoutsIdRouteHandler: RouteHandler<typeof getPortoutsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortoutsIdCommentsRouteHandler: RouteHandler<
  typeof getPortoutsIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPortoutsIdCommentsRouteHandler: RouteHandler<
  typeof postPortoutsIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortoutsIdSupportingDocumentsRouteHandler: RouteHandler<
  typeof getPortoutsIdSupportingDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPortoutsIdSupportingDocumentsRouteHandler: RouteHandler<
  typeof postPortoutsIdSupportingDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPortoutsIdStatusRouteHandler: RouteHandler<
  typeof patchPortoutsIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
