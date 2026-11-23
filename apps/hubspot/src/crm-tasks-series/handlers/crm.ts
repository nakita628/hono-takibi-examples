import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCrmTaskSeries202609TaskIdRoute,
  getCrmTaskSeries202609TaskIdRoute,
  patchCrmTaskSeries202609TaskIdRoute,
  postCrmTaskSeries202609Route,
} from '../routes'

export const postCrmTaskSeries202609RouteHandler: RouteHandler<
  typeof postCrmTaskSeries202609Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCrmTaskSeries202609TaskIdRouteHandler: RouteHandler<
  typeof getCrmTaskSeries202609TaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCrmTaskSeries202609TaskIdRouteHandler: RouteHandler<
  typeof deleteCrmTaskSeries202609TaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCrmTaskSeries202609TaskIdRouteHandler: RouteHandler<
  typeof patchCrmTaskSeries202609TaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
