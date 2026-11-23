import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReportsIdRoute,
  getReportsDashboardsUidRoute,
  getReportsIdRoute,
  getReportsImagesImageRoute,
  getReportsRenderCsvsRoute,
  getReportsRenderPdfsRoute,
  getReportsRoute,
  getReportsSettingsRoute,
  postReportsEmailRoute,
  postReportsRoute,
  postReportsSettingsRoute,
  postReportsTestEmailRoute,
  putReportsIdRoute,
} from '../routes'

export const getReportsRouteHandler: RouteHandler<typeof getReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsRouteHandler: RouteHandler<typeof postReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsDashboardsUidRouteHandler: RouteHandler<
  typeof getReportsDashboardsUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsEmailRouteHandler: RouteHandler<typeof postReportsEmailRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReportsImagesImageRouteHandler: RouteHandler<
  typeof getReportsImagesImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsRenderCsvsRouteHandler: RouteHandler<
  typeof getReportsRenderCsvsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsRenderPdfsRouteHandler: RouteHandler<
  typeof getReportsRenderPdfsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsSettingsRouteHandler: RouteHandler<typeof getReportsSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postReportsSettingsRouteHandler: RouteHandler<
  typeof postReportsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsTestEmailRouteHandler: RouteHandler<
  typeof postReportsTestEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsIdRouteHandler: RouteHandler<typeof deleteReportsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsIdRouteHandler: RouteHandler<typeof getReportsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putReportsIdRouteHandler: RouteHandler<typeof putReportsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
