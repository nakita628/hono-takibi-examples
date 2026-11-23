import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisassociateIamInstanceProfileRoute,
  postActionDisassociateIamInstanceProfileRoute,
} from '../routes'

export const getActionDisassociateIamInstanceProfileRouteHandler: RouteHandler<
  typeof getActionDisassociateIamInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisassociateIamInstanceProfileRouteHandler: RouteHandler<
  typeof postActionDisassociateIamInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
