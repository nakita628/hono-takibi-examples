import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2TagsTagIdResourcesRoute,
  deleteV2TagsTagIdRoute,
  getV2TagsRoute,
  getV2TagsTagIdRoute,
  postV2TagsRoute,
  postV2TagsTagIdResourcesRoute,
} from '../routes'

export const getV2TagsRouteHandler: RouteHandler<typeof getV2TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TagsRouteHandler: RouteHandler<typeof postV2TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2TagsTagIdRouteHandler: RouteHandler<typeof deleteV2TagsTagIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2TagsTagIdRouteHandler: RouteHandler<typeof getV2TagsTagIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2TagsTagIdResourcesRouteHandler: RouteHandler<
  typeof deleteV2TagsTagIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TagsTagIdResourcesRouteHandler: RouteHandler<
  typeof postV2TagsTagIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
