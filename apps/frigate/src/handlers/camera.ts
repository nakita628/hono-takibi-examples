import type { RouteHandler } from '@hono/zod-openapi'
import type {
  putCameraCameraNameSetFeatureRoute,
  putCameraCameraNameSetFeatureSubCommandRoute,
} from '../routes'

export const putCameraCameraNameSetFeatureSubCommandRouteHandler: RouteHandler<
  typeof putCameraCameraNameSetFeatureSubCommandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCameraCameraNameSetFeatureRouteHandler: RouteHandler<
  typeof putCameraCameraNameSetFeatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}
