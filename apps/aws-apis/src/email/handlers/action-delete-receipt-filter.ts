import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteReceiptFilterRoute,
  postActionDeleteReceiptFilterRoute,
} from '../routes'

export const getActionDeleteReceiptFilterRouteHandler: RouteHandler<
  typeof getActionDeleteReceiptFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteReceiptFilterRouteHandler: RouteHandler<
  typeof postActionDeleteReceiptFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
