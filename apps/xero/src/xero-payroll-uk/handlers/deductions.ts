import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDeductionsDeductionIdRoute,
  getDeductionsRoute,
  postDeductionsRoute,
} from '../routes'

export const getDeductionsRouteHandler: RouteHandler<typeof getDeductionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeductionsRouteHandler: RouteHandler<typeof postDeductionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeductionsDeductionIdRouteHandler: RouteHandler<
  typeof getDeductionsDeductionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
