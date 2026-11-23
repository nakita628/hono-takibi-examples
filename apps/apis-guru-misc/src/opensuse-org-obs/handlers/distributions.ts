import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDistributionsDistributionIdRoute,
  getDistributionsDistributionIdRoute,
  getDistributionsIncludeRemotesRoute,
  getDistributionsRoute,
  postDistributionsRoute,
  putDistributionsBulkReplaceRoute,
  putDistributionsDistributionIdRoute,
} from '../routes'

export const getDistributionsRouteHandler: RouteHandler<typeof getDistributionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDistributionsRouteHandler: RouteHandler<typeof postDistributionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putDistributionsBulkReplaceRouteHandler: RouteHandler<
  typeof putDistributionsBulkReplaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDistributionsIncludeRemotesRouteHandler: RouteHandler<
  typeof getDistributionsIncludeRemotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDistributionsDistributionIdRouteHandler: RouteHandler<
  typeof deleteDistributionsDistributionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDistributionsDistributionIdRouteHandler: RouteHandler<
  typeof getDistributionsDistributionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDistributionsDistributionIdRouteHandler: RouteHandler<
  typeof putDistributionsDistributionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
