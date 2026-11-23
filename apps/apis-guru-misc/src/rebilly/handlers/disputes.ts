import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDisputesIdRoute,
  getDisputesRoute,
  postDisputesRoute,
  putDisputesIdRoute,
} from '../routes'

export const getDisputesRouteHandler: RouteHandler<typeof getDisputesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDisputesRouteHandler: RouteHandler<typeof postDisputesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDisputesIdRouteHandler: RouteHandler<typeof getDisputesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putDisputesIdRouteHandler: RouteHandler<typeof putDisputesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
