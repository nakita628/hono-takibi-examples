import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssociateIamInstanceProfileRoute,
  postActionAssociateIamInstanceProfileRoute,
} from '../routes'

export const getActionAssociateIamInstanceProfileRouteHandler: RouteHandler<
  typeof getActionAssociateIamInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateIamInstanceProfileRouteHandler: RouteHandler<
  typeof postActionAssociateIamInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
