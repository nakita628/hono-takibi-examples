import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateServiceSpecificCredentialRoute,
  postActionUpdateServiceSpecificCredentialRoute,
} from '../routes'

export const getActionUpdateServiceSpecificCredentialRouteHandler: RouteHandler<
  typeof getActionUpdateServiceSpecificCredentialRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateServiceSpecificCredentialRouteHandler: RouteHandler<
  typeof postActionUpdateServiceSpecificCredentialRoute
> = async (c) => {
  throw new Error('Not implemented')
}
