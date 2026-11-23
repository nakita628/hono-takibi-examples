import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getKpiDauDataSeriesRoute,
  getKpiMauDataSeriesRoute,
  getKpiNewUsersDataSeriesRoute,
  getKpiUninstallsDataSeriesRoute,
} from '../routes'

export const getKpiDauDataSeriesRouteHandler: RouteHandler<
  typeof getKpiDauDataSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKpiMauDataSeriesRouteHandler: RouteHandler<
  typeof getKpiMauDataSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKpiNewUsersDataSeriesRouteHandler: RouteHandler<
  typeof getKpiNewUsersDataSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKpiUninstallsDataSeriesRouteHandler: RouteHandler<
  typeof getKpiUninstallsDataSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
