import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteStatusCodesRoute,
  getStatusCodesRoute,
  patchStatusCodesRoute,
  postStatusCodesRoute,
  putStatusCodesRoute,
  traceStatusCodesRoute,
} from '../routes'

export const deleteStatusCodesRouteHandler: RouteHandler<typeof deleteStatusCodesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStatusCodesRouteHandler: RouteHandler<typeof getStatusCodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchStatusCodesRouteHandler: RouteHandler<typeof patchStatusCodesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postStatusCodesRouteHandler: RouteHandler<typeof postStatusCodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putStatusCodesRouteHandler: RouteHandler<typeof putStatusCodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const traceStatusCodesRouteHandler: RouteHandler<typeof traceStatusCodesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
