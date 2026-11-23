import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBillableMetricsCodeRoute,
  getBillableMetricsCodeRoute,
  getBillableMetricsRoute,
  postBillableMetricsEvaluateExpressionRoute,
  postBillableMetricsRoute,
  putBillableMetricsCodeRoute,
} from '../routes'

export const postBillableMetricsRouteHandler: RouteHandler<
  typeof postBillableMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBillableMetricsRouteHandler: RouteHandler<typeof getBillableMetricsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBillableMetricsEvaluateExpressionRouteHandler: RouteHandler<
  typeof postBillableMetricsEvaluateExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBillableMetricsCodeRouteHandler: RouteHandler<
  typeof putBillableMetricsCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBillableMetricsCodeRouteHandler: RouteHandler<
  typeof deleteBillableMetricsCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBillableMetricsCodeRouteHandler: RouteHandler<
  typeof getBillableMetricsCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
