import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTagsLabelRoute,
  getTagsLabelRoute,
  getTagsRoute,
  postTagsRoute,
} from '../routes'

export const getTagsRouteHandler: RouteHandler<typeof getTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTagsRouteHandler: RouteHandler<typeof postTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTagsLabelRouteHandler: RouteHandler<typeof deleteTagsLabelRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTagsLabelRouteHandler: RouteHandler<typeof getTagsLabelRoute> = async (c) => {
  throw new Error('Not implemented')
}
