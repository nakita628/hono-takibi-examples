import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTokensTokenIdRoute,
  getTokensBucketsBucketIdFilesFileIdRoute,
  getTokensTokenIdRoute,
  patchTokensTokenIdRoute,
  postTokensBucketsBucketIdFilesFileIdRoute,
} from '../routes'

export const getTokensBucketsBucketIdFilesFileIdRouteHandler: RouteHandler<
  typeof getTokensBucketsBucketIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTokensBucketsBucketIdFilesFileIdRouteHandler: RouteHandler<
  typeof postTokensBucketsBucketIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTokensTokenIdRouteHandler: RouteHandler<typeof getTokensTokenIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchTokensTokenIdRouteHandler: RouteHandler<typeof patchTokensTokenIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteTokensTokenIdRouteHandler: RouteHandler<
  typeof deleteTokensTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
