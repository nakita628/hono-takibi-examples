import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSegmentsIdRoute,
  getSegmentsIdContactsRoute,
  getSegmentsIdRoute,
  getSegmentsRoute,
  patchSegmentsIdRoute,
  postSegmentsRoute,
} from '../routes'

export const postSegmentsRouteHandler: RouteHandler<typeof postSegmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSegmentsRouteHandler: RouteHandler<typeof getSegmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSegmentsIdRouteHandler: RouteHandler<typeof getSegmentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSegmentsIdRouteHandler: RouteHandler<typeof patchSegmentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSegmentsIdRouteHandler: RouteHandler<typeof deleteSegmentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSegmentsIdContactsRouteHandler: RouteHandler<
  typeof getSegmentsIdContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
