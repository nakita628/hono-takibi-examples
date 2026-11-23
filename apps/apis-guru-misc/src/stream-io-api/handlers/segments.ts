import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSegmentsIdRoute,
  getSegmentsRoute,
  postSegmentsRoute,
  putSegmentsIdRoute,
} from '../routes'

export const getSegmentsRouteHandler: RouteHandler<typeof getSegmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSegmentsRouteHandler: RouteHandler<typeof postSegmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSegmentsIdRouteHandler: RouteHandler<typeof deleteSegmentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSegmentsIdRouteHandler: RouteHandler<typeof putSegmentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
