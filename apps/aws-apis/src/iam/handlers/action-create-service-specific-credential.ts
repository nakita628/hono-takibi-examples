import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateServiceSpecificCredentialRoute,
  postActionCreateServiceSpecificCredentialRoute,
} from '../routes'

export const getActionCreateServiceSpecificCredentialRouteHandler: RouteHandler<
  typeof getActionCreateServiceSpecificCredentialRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateServiceSpecificCredentialRouteHandler: RouteHandler<
  typeof postActionCreateServiceSpecificCredentialRoute
> = async (c) => {
  throw new Error('Not implemented')
}
