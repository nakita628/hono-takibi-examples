import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetDefaultCreditSpecificationRoute,
  postActionGetDefaultCreditSpecificationRoute,
} from '../routes'

export const getActionGetDefaultCreditSpecificationRouteHandler: RouteHandler<
  typeof getActionGetDefaultCreditSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetDefaultCreditSpecificationRouteHandler: RouteHandler<
  typeof postActionGetDefaultCreditSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
