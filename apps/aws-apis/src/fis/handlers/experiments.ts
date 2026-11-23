import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteExperimentsIdRoute,
  getExperimentsIdRoute,
  getExperimentsRoute,
  postExperimentsRoute,
} from '../routes'

export const getExperimentsIdRouteHandler: RouteHandler<typeof getExperimentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteExperimentsIdRouteHandler: RouteHandler<
  typeof deleteExperimentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExperimentsRouteHandler: RouteHandler<typeof getExperimentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postExperimentsRouteHandler: RouteHandler<typeof postExperimentsRoute> = async (c) => {
  throw new Error('Not implemented')
}
