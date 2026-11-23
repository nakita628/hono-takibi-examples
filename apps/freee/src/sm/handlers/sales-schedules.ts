import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSalesSchedulesIdRoute,
  getSalesSchedulesIdRoute,
  getSalesSchedulesRoute,
  patchSalesSchedulesIdRoute,
  postSalesSchedulesIdActualizationRoute,
} from '../routes'

export const getSalesSchedulesRouteHandler: RouteHandler<typeof getSalesSchedulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSalesSchedulesIdRouteHandler: RouteHandler<
  typeof getSalesSchedulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSalesSchedulesIdRouteHandler: RouteHandler<
  typeof patchSalesSchedulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSalesSchedulesIdRouteHandler: RouteHandler<
  typeof deleteSalesSchedulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSalesSchedulesIdActualizationRouteHandler: RouteHandler<
  typeof postSalesSchedulesIdActualizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
