import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCustomerServiceMetricTaskRoute,
  getCustomerServiceMetricTaskTaskIdRoute,
  postCustomerServiceMetricTaskRoute,
} from '../routes'

export const getCustomerServiceMetricTaskRouteHandler: RouteHandler<
  typeof getCustomerServiceMetricTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomerServiceMetricTaskRouteHandler: RouteHandler<
  typeof postCustomerServiceMetricTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomerServiceMetricTaskTaskIdRouteHandler: RouteHandler<
  typeof getCustomerServiceMetricTaskTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
