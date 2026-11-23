import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2NameRoute,
  getV2NameRoute,
  getV2ParentRoute,
  postV2ParentRoute,
  putV2NameRoute,
} from '../routes'

export const deleteV2NameRouteHandler: RouteHandler<typeof deleteV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2NameRouteHandler: RouteHandler<typeof getV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2NameRouteHandler: RouteHandler<typeof putV2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ParentRouteHandler: RouteHandler<typeof getV2ParentRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ParentRouteHandler: RouteHandler<typeof postV2ParentRoute> = async (c) => {
  throw new Error('Not implemented')
}
