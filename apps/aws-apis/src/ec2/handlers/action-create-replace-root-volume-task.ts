import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateReplaceRootVolumeTaskRoute,
  postActionCreateReplaceRootVolumeTaskRoute,
} from '../routes'

export const getActionCreateReplaceRootVolumeTaskRouteHandler: RouteHandler<
  typeof getActionCreateReplaceRootVolumeTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateReplaceRootVolumeTaskRouteHandler: RouteHandler<
  typeof postActionCreateReplaceRootVolumeTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
