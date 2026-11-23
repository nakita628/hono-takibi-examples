import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBgpSessionsIdRoute,
  getBgpSessionsIdRoute,
  putBgpSessionsIdRoute,
} from '../routes'

export const deleteBgpSessionsIdRouteHandler: RouteHandler<
  typeof deleteBgpSessionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBgpSessionsIdRouteHandler: RouteHandler<typeof getBgpSessionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBgpSessionsIdRouteHandler: RouteHandler<typeof putBgpSessionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
