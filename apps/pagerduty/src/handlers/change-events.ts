import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getChangeEventsRoute,
  postChangeEventsRoute,
  getChangeEventsIdRoute,
  putChangeEventsIdRoute,
} from '../routes'

export const getChangeEventsRouteHandler: RouteHandler<typeof getChangeEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChangeEventsRouteHandler: RouteHandler<typeof postChangeEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getChangeEventsIdRouteHandler: RouteHandler<typeof getChangeEventsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putChangeEventsIdRouteHandler: RouteHandler<typeof putChangeEventsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
