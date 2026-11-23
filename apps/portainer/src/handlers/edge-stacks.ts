import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEdgeStacksIdRoute,
  getEdgeStacksIdFileRoute,
  getEdgeStacksIdRoute,
  getEdgeStacksRoute,
  postEdgeStacksCreateFileRoute,
  postEdgeStacksCreateRepositoryRoute,
  postEdgeStacksCreateStringRoute,
  putEdgeStacksIdRoute,
  putEdgeStacksIdStatusRoute,
} from '../routes'

export const getEdgeStacksRouteHandler: RouteHandler<typeof getEdgeStacksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEdgeStacksIdRouteHandler: RouteHandler<typeof deleteEdgeStacksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEdgeStacksIdRouteHandler: RouteHandler<typeof getEdgeStacksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putEdgeStacksIdRouteHandler: RouteHandler<typeof putEdgeStacksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEdgeStacksIdFileRouteHandler: RouteHandler<
  typeof getEdgeStacksIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEdgeStacksIdStatusRouteHandler: RouteHandler<
  typeof putEdgeStacksIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEdgeStacksCreateFileRouteHandler: RouteHandler<
  typeof postEdgeStacksCreateFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEdgeStacksCreateRepositoryRouteHandler: RouteHandler<
  typeof postEdgeStacksCreateRepositoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEdgeStacksCreateStringRouteHandler: RouteHandler<
  typeof postEdgeStacksCreateStringRoute
> = async (c) => {
  throw new Error('Not implemented')
}
