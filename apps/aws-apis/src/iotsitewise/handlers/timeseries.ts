import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTimeseriesDescribeIndexRoute,
  getTimeseriesIndexRoute,
  postTimeseriesAssociateAliasAssetIdPropertyIdRoute,
  postTimeseriesDeleteIndexRoute,
  postTimeseriesDisassociateAliasAssetIdPropertyIdRoute,
} from '../routes'

export const postTimeseriesAssociateAliasAssetIdPropertyIdRouteHandler: RouteHandler<
  typeof postTimeseriesAssociateAliasAssetIdPropertyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTimeseriesDeleteIndexRouteHandler: RouteHandler<
  typeof postTimeseriesDeleteIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimeseriesDescribeIndexRouteHandler: RouteHandler<
  typeof getTimeseriesDescribeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTimeseriesDisassociateAliasAssetIdPropertyIdRouteHandler: RouteHandler<
  typeof postTimeseriesDisassociateAliasAssetIdPropertyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimeseriesIndexRouteHandler: RouteHandler<typeof getTimeseriesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
