import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postEnterpriseAuthObtainIndexRoute,
  postEnterpriseAuthRefreshIndexRoute,
  postEnterpriseAuthRevokeIndexRoute,
  postEnterpriseAuthVerifyIndexRoute,
} from '../routes'

export const postEnterpriseAuthObtainIndexRouteHandler: RouteHandler<
  typeof postEnterpriseAuthObtainIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEnterpriseAuthRefreshIndexRouteHandler: RouteHandler<
  typeof postEnterpriseAuthRefreshIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEnterpriseAuthRevokeIndexRouteHandler: RouteHandler<
  typeof postEnterpriseAuthRevokeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEnterpriseAuthVerifyIndexRouteHandler: RouteHandler<
  typeof postEnterpriseAuthVerifyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
