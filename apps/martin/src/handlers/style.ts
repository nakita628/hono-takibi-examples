import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStyleStyleIdRoute,
  getStyleStyleIdStaticCameraSizeFormatRoute,
  getStyleStyleIdZXYFormatRoute,
  postStyleStyleIdStaticCameraSizeFormatRoute,
} from '../routes'

export const getStyleStyleIdRouteHandler: RouteHandler<typeof getStyleStyleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStyleStyleIdZXYFormatRouteHandler: RouteHandler<
  typeof getStyleStyleIdZXYFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStyleStyleIdStaticCameraSizeFormatRouteHandler: RouteHandler<
  typeof getStyleStyleIdStaticCameraSizeFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStyleStyleIdStaticCameraSizeFormatRouteHandler: RouteHandler<
  typeof postStyleStyleIdStaticCameraSizeFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
