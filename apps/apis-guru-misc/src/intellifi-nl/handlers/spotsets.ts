import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSpotsetsIdRoute,
  getSpotsetsRoute,
  postSpotsetsRoute,
  putSpotsetsIdRoute,
} from '../routes'

export const getSpotsetsRouteHandler: RouteHandler<typeof getSpotsetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpotsetsRouteHandler: RouteHandler<typeof postSpotsetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpotsetsIdRouteHandler: RouteHandler<typeof getSpotsetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSpotsetsIdRouteHandler: RouteHandler<typeof putSpotsetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
