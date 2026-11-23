import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postImagesEditsRoute,
  postImagesGenerationsRoute,
  postImagesVariationsRoute,
} from '../routes'

export const postImagesEditsRouteHandler: RouteHandler<typeof postImagesEditsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postImagesGenerationsRouteHandler: RouteHandler<
  typeof postImagesGenerationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postImagesVariationsRouteHandler: RouteHandler<
  typeof postImagesVariationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
