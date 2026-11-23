import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionResetEbsDefaultKmsKeyIdRoute,
  postActionResetEbsDefaultKmsKeyIdRoute,
} from '../routes'

export const getActionResetEbsDefaultKmsKeyIdRouteHandler: RouteHandler<
  typeof getActionResetEbsDefaultKmsKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResetEbsDefaultKmsKeyIdRouteHandler: RouteHandler<
  typeof postActionResetEbsDefaultKmsKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
