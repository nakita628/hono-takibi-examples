import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2ImagesImageIdRoute,
  getV2ImagesImageIdRoute,
  getV2ImagesRoute,
  postV2ImagesRoute,
  putV2ImagesImageIdRoute,
} from '../routes'

export const getV2ImagesRouteHandler: RouteHandler<typeof getV2ImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ImagesRouteHandler: RouteHandler<typeof postV2ImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2ImagesImageIdRouteHandler: RouteHandler<
  typeof deleteV2ImagesImageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ImagesImageIdRouteHandler: RouteHandler<typeof getV2ImagesImageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV2ImagesImageIdRouteHandler: RouteHandler<typeof putV2ImagesImageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
