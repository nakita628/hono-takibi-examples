import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVarPathRoute,
  getVarPathRoute,
  postVarPathRoute,
  putVarPathRoute,
} from '../routes'

export const deleteVarPathRouteHandler: RouteHandler<typeof deleteVarPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVarPathRouteHandler: RouteHandler<typeof getVarPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVarPathRouteHandler: RouteHandler<typeof postVarPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putVarPathRouteHandler: RouteHandler<typeof putVarPathRoute> = async (c) => {
  throw new Error('Not implemented')
}
