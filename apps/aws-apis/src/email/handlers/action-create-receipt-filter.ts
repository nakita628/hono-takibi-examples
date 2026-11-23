import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateReceiptFilterRoute,
  postActionCreateReceiptFilterRoute,
} from '../routes'

export const getActionCreateReceiptFilterRouteHandler: RouteHandler<
  typeof getActionCreateReceiptFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateReceiptFilterRouteHandler: RouteHandler<
  typeof postActionCreateReceiptFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
