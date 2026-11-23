import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postBulkRoute,
  postBulkStreamRoute,
  putBulkRoute,
  putBulkStreamRoute,
} from '../routes'

export const postBulkRouteHandler: RouteHandler<typeof postBulkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putBulkRouteHandler: RouteHandler<typeof putBulkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBulkStreamRouteHandler: RouteHandler<typeof postBulkStreamRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putBulkStreamRouteHandler: RouteHandler<typeof putBulkStreamRoute> = async (c) => {
  throw new Error('Not implemented')
}
