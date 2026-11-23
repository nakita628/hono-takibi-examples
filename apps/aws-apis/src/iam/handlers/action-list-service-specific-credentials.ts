import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListServiceSpecificCredentialsRoute,
  postActionListServiceSpecificCredentialsRoute,
} from '../routes'

export const getActionListServiceSpecificCredentialsRouteHandler: RouteHandler<
  typeof getActionListServiceSpecificCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListServiceSpecificCredentialsRouteHandler: RouteHandler<
  typeof postActionListServiceSpecificCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
