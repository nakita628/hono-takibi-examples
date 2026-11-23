import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyDefaultCreditSpecificationRoute,
  postActionModifyDefaultCreditSpecificationRoute,
} from '../routes'

export const getActionModifyDefaultCreditSpecificationRouteHandler: RouteHandler<
  typeof getActionModifyDefaultCreditSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyDefaultCreditSpecificationRouteHandler: RouteHandler<
  typeof postActionModifyDefaultCreditSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
