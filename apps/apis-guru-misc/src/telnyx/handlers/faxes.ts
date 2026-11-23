import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFaxesIdRoute,
  getFaxesIdRoute,
  getFaxesRoute,
  postFaxesIdActionsRefreshRoute,
  postFaxesRoute,
} from '../routes'

export const getFaxesRouteHandler: RouteHandler<typeof getFaxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFaxesRouteHandler: RouteHandler<typeof postFaxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFaxesIdRouteHandler: RouteHandler<typeof deleteFaxesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFaxesIdRouteHandler: RouteHandler<typeof getFaxesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFaxesIdActionsRefreshRouteHandler: RouteHandler<
  typeof postFaxesIdActionsRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}
