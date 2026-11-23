import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProducersIdExternalRoute,
  getProducersIdFullRoute,
  getProducersIdRoute,
  getProducersRoute,
} from '../routes'

export const getProducersIdRouteHandler: RouteHandler<typeof getProducersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProducersIdFullRouteHandler: RouteHandler<typeof getProducersIdFullRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProducersIdExternalRouteHandler: RouteHandler<
  typeof getProducersIdExternalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProducersRouteHandler: RouteHandler<typeof getProducersRoute> = async (c) => {
  throw new Error('Not implemented')
}
