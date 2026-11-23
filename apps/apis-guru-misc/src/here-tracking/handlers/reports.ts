import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReportsV4HealthRoute,
  getReportsV4ReportIdRoute,
  getReportsV4VersionRoute,
  postReportsV4Route,
} from '../routes'

export const postReportsV4RouteHandler: RouteHandler<typeof postReportsV4Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsV4HealthRouteHandler: RouteHandler<typeof getReportsV4HealthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReportsV4VersionRouteHandler: RouteHandler<
  typeof getReportsV4VersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsV4ReportIdRouteHandler: RouteHandler<
  typeof getReportsV4ReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
