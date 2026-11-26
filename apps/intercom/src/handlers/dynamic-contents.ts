import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDynamicContentsRoute,
  postDynamicContentsRoute,
  getDynamicContentsIdRoute,
  putDynamicContentsIdRoute,
  deleteDynamicContentsIdRoute,
} from '../routes'

export const getDynamicContentsRouteHandler: RouteHandler<typeof getDynamicContentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDynamicContentsRouteHandler: RouteHandler<
  typeof postDynamicContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDynamicContentsIdRouteHandler: RouteHandler<
  typeof getDynamicContentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDynamicContentsIdRouteHandler: RouteHandler<
  typeof putDynamicContentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDynamicContentsIdRouteHandler: RouteHandler<
  typeof deleteDynamicContentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
