import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getItemFamiliesItemFamilyIdRoute,
  getItemFamiliesRoute,
  postItemFamiliesItemFamilyIdDeleteRoute,
  postItemFamiliesItemFamilyIdRoute,
  postItemFamiliesRoute,
} from '../routes'

export const postItemFamiliesItemFamilyIdDeleteRouteHandler: RouteHandler<
  typeof postItemFamiliesItemFamilyIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getItemFamiliesRouteHandler: RouteHandler<typeof getItemFamiliesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemFamiliesRouteHandler: RouteHandler<typeof postItemFamiliesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getItemFamiliesItemFamilyIdRouteHandler: RouteHandler<
  typeof getItemFamiliesItemFamilyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemFamiliesItemFamilyIdRouteHandler: RouteHandler<
  typeof postItemFamiliesItemFamilyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
