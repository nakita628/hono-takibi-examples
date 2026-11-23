import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getExternalEventsIdRoute,
  getExternalEventsRoute,
  postExternalEventsRoute,
} from '../routes'

export const getExternalEventsRouteHandler: RouteHandler<typeof getExternalEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postExternalEventsRouteHandler: RouteHandler<typeof postExternalEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getExternalEventsIdRouteHandler: RouteHandler<
  typeof getExternalEventsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
