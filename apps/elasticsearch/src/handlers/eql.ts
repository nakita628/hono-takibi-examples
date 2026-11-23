import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEqlSearchIdRoute,
  getEqlSearchIdRoute,
  getEqlSearchStatusIdRoute,
} from '../routes'

export const getEqlSearchIdRouteHandler: RouteHandler<typeof getEqlSearchIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEqlSearchIdRouteHandler: RouteHandler<typeof deleteEqlSearchIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEqlSearchStatusIdRouteHandler: RouteHandler<
  typeof getEqlSearchStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
