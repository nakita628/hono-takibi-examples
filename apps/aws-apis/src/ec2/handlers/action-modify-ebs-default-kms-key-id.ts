import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyEbsDefaultKmsKeyIdRoute,
  postActionModifyEbsDefaultKmsKeyIdRoute,
} from '../routes'

export const getActionModifyEbsDefaultKmsKeyIdRouteHandler: RouteHandler<
  typeof getActionModifyEbsDefaultKmsKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyEbsDefaultKmsKeyIdRouteHandler: RouteHandler<
  typeof postActionModifyEbsDefaultKmsKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
