import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTagsRoute,
  postTagsRoute,
  putTagsRoute,
  putTagsAssetsRoute,
  deleteTagsIdRoute,
  getTagsIdRoute,
  putTagsIdRoute,
  deleteTagsIdAssetsRoute,
  putTagsIdAssetsRoute,
} from '../routes'

export const getTagsRouteHandler: RouteHandler<typeof getTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTagsRouteHandler: RouteHandler<typeof postTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTagsRouteHandler: RouteHandler<typeof putTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTagsAssetsRouteHandler: RouteHandler<typeof putTagsAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTagsIdRouteHandler: RouteHandler<typeof deleteTagsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTagsIdRouteHandler: RouteHandler<typeof getTagsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTagsIdRouteHandler: RouteHandler<typeof putTagsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTagsIdAssetsRouteHandler: RouteHandler<typeof deleteTagsIdAssetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putTagsIdAssetsRouteHandler: RouteHandler<typeof putTagsIdAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}
