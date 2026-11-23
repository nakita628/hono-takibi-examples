import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDocsSlugRoute,
  getDocsSlugRoute,
  postDocsRoute,
  postDocsSearchRoute,
  putDocsSlugRoute,
} from '../routes'

export const postDocsRouteHandler: RouteHandler<typeof postDocsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDocsSearchRouteHandler: RouteHandler<typeof postDocsSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDocsSlugRouteHandler: RouteHandler<typeof deleteDocsSlugRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocsSlugRouteHandler: RouteHandler<typeof getDocsSlugRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putDocsSlugRouteHandler: RouteHandler<typeof putDocsSlugRoute> = async (c) => {
  throw new Error('Not implemented')
}
