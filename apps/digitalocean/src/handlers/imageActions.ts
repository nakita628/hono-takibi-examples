import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2ImagesImageIdActionsActionIdRoute,
  getV2ImagesImageIdActionsRoute,
  postV2ImagesImageIdActionsRoute,
} from '../routes'

export const getV2ImagesImageIdActionsRouteHandler: RouteHandler<
  typeof getV2ImagesImageIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ImagesImageIdActionsRouteHandler: RouteHandler<
  typeof postV2ImagesImageIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ImagesImageIdActionsActionIdRouteHandler: RouteHandler<
  typeof getV2ImagesImageIdActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
