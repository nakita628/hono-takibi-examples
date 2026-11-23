import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBundlesIdRoute,
  getBundlesIdRoute,
  getBundlesRoute,
  patchBundlesIdRoute,
  postBundlesIdShareRoute,
  postBundlesRoute,
} from '../routes'

export const getBundlesRouteHandler: RouteHandler<typeof getBundlesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBundlesRouteHandler: RouteHandler<typeof postBundlesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBundlesIdRouteHandler: RouteHandler<typeof deleteBundlesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBundlesIdRouteHandler: RouteHandler<typeof getBundlesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBundlesIdRouteHandler: RouteHandler<typeof patchBundlesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBundlesIdShareRouteHandler: RouteHandler<typeof postBundlesIdShareRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
