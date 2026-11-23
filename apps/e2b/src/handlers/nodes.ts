import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNodesNodeIDRoute,
  getNodesNodeIDSandboxesRoute,
  getNodesRoute,
  postNodesNodeIDRoute,
} from '../routes'

export const getNodesRouteHandler: RouteHandler<typeof getNodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNodesNodeIDRouteHandler: RouteHandler<typeof getNodesNodeIDRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postNodesNodeIDRouteHandler: RouteHandler<typeof postNodesNodeIDRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNodesNodeIDSandboxesRouteHandler: RouteHandler<
  typeof getNodesNodeIDSandboxesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
