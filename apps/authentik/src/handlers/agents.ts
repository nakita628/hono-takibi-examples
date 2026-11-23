import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAgentsAgentsIdIndexRoute,
  getAgentsAgentsIdIndexRoute,
  getAgentsAgentsIndexRoute,
  patchAgentsAgentsIdIndexRoute,
  postAgentsAgentsIndexRoute,
  putAgentsAgentsIdIndexRoute,
} from '../routes'

export const getAgentsAgentsIndexRouteHandler: RouteHandler<
  typeof getAgentsAgentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAgentsAgentsIndexRouteHandler: RouteHandler<
  typeof postAgentsAgentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAgentsAgentsIdIndexRouteHandler: RouteHandler<
  typeof getAgentsAgentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAgentsAgentsIdIndexRouteHandler: RouteHandler<
  typeof putAgentsAgentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAgentsAgentsIdIndexRouteHandler: RouteHandler<
  typeof patchAgentsAgentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAgentsAgentsIdIndexRouteHandler: RouteHandler<
  typeof deleteAgentsAgentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
