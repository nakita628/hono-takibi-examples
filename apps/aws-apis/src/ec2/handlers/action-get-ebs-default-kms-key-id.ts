import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetEbsDefaultKmsKeyIdRoute,
  postActionGetEbsDefaultKmsKeyIdRoute,
} from '../routes'

export const getActionGetEbsDefaultKmsKeyIdRouteHandler: RouteHandler<
  typeof getActionGetEbsDefaultKmsKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetEbsDefaultKmsKeyIdRouteHandler: RouteHandler<
  typeof postActionGetEbsDefaultKmsKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
