import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGroupUniqueIdRoute,
  patchGroupUniqueIdRoute,
  putGroupUniqueIdRoute,
} from '../routes'

export const getGroupUniqueIdRouteHandler: RouteHandler<typeof getGroupUniqueIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchGroupUniqueIdRouteHandler: RouteHandler<typeof patchGroupUniqueIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putGroupUniqueIdRouteHandler: RouteHandler<typeof putGroupUniqueIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
