import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteServiceSpecificCredentialRoute,
  postActionDeleteServiceSpecificCredentialRoute,
} from '../routes'

export const getActionDeleteServiceSpecificCredentialRouteHandler: RouteHandler<
  typeof getActionDeleteServiceSpecificCredentialRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteServiceSpecificCredentialRouteHandler: RouteHandler<
  typeof postActionDeleteServiceSpecificCredentialRoute
> = async (c) => {
  throw new Error('Not implemented')
}
