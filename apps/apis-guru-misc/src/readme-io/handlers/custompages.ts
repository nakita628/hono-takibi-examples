import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCustompagesSlugRoute,
  getCustompagesRoute,
  getCustompagesSlugRoute,
  postCustompagesRoute,
  putCustompagesSlugRoute,
} from '../routes'

export const getCustompagesRouteHandler: RouteHandler<typeof getCustompagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustompagesRouteHandler: RouteHandler<typeof postCustompagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCustompagesSlugRouteHandler: RouteHandler<
  typeof deleteCustompagesSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustompagesSlugRouteHandler: RouteHandler<typeof getCustompagesSlugRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putCustompagesSlugRouteHandler: RouteHandler<typeof putCustompagesSlugRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
