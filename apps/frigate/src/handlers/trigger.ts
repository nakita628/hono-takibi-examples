import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTriggerEmbeddingCameraNameNameRoute,
  postTriggerEmbeddingRoute,
  putTriggerEmbeddingCameraNameNameRoute,
} from '../routes'

export const postTriggerEmbeddingRouteHandler: RouteHandler<
  typeof postTriggerEmbeddingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTriggerEmbeddingCameraNameNameRouteHandler: RouteHandler<
  typeof putTriggerEmbeddingCameraNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTriggerEmbeddingCameraNameNameRouteHandler: RouteHandler<
  typeof deleteTriggerEmbeddingCameraNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
