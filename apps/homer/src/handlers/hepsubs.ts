import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteHepsubsHepsubIdRoute,
  getHepsubsHepsubIdRoute,
  getHepsubsRoute,
  postHepsubsRoute,
  putHepsubsHepsubIdRoute,
} from '../routes'

export const getHepsubsRouteHandler: RouteHandler<typeof getHepsubsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postHepsubsRouteHandler: RouteHandler<typeof postHepsubsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHepsubsHepsubIdRouteHandler: RouteHandler<typeof getHepsubsHepsubIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putHepsubsHepsubIdRouteHandler: RouteHandler<typeof putHepsubsHepsubIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteHepsubsHepsubIdRouteHandler: RouteHandler<
  typeof deleteHepsubsHepsubIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
