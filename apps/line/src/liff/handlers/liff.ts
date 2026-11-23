import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLiffV1AppsLiffIdRoute,
  getLiffV1AppsRoute,
  postLiffV1AppsRoute,
  putLiffV1AppsLiffIdRoute,
} from '../routes'

export const postLiffV1AppsRouteHandler: RouteHandler<typeof postLiffV1AppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLiffV1AppsRouteHandler: RouteHandler<typeof getLiffV1AppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putLiffV1AppsLiffIdRouteHandler: RouteHandler<
  typeof putLiffV1AppsLiffIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLiffV1AppsLiffIdRouteHandler: RouteHandler<
  typeof deleteLiffV1AppsLiffIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
