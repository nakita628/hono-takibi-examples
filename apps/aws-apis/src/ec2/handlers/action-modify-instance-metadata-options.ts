import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyInstanceMetadataOptionsRoute,
  postActionModifyInstanceMetadataOptionsRoute,
} from '../routes'

export const getActionModifyInstanceMetadataOptionsRouteHandler: RouteHandler<
  typeof getActionModifyInstanceMetadataOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyInstanceMetadataOptionsRouteHandler: RouteHandler<
  typeof postActionModifyInstanceMetadataOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
