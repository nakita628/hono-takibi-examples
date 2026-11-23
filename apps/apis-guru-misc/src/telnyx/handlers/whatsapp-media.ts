import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWhatsappMediaWhatsappUserIdMediaIdRoute,
  getWhatsappMediaWhatsappUserIdMediaIdRoute,
  postWhatsappMediaRoute,
} from '../routes'

export const postWhatsappMediaRouteHandler: RouteHandler<typeof postWhatsappMediaRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteWhatsappMediaWhatsappUserIdMediaIdRouteHandler: RouteHandler<
  typeof deleteWhatsappMediaWhatsappUserIdMediaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWhatsappMediaWhatsappUserIdMediaIdRouteHandler: RouteHandler<
  typeof getWhatsappMediaWhatsappUserIdMediaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
