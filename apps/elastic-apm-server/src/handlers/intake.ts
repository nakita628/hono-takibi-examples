import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postIntakeV2EventsRoute,
  postIntakeV2RumEventsRoute,
  postIntakeV3RumEventsRoute,
} from '../routes'

export const postIntakeV2EventsRouteHandler: RouteHandler<typeof postIntakeV2EventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIntakeV2RumEventsRouteHandler: RouteHandler<
  typeof postIntakeV2RumEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIntakeV3RumEventsRouteHandler: RouteHandler<
  typeof postIntakeV3RumEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
