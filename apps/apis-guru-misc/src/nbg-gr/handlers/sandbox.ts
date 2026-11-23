import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSandboxSandboxIdRoute,
  getSandboxSandboxIdRoute,
  postSandboxRoute,
  putSandboxRoute,
} from '../routes'

export const postSandboxRouteHandler: RouteHandler<typeof postSandboxRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSandboxRouteHandler: RouteHandler<typeof putSandboxRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSandboxSandboxIdRouteHandler: RouteHandler<
  typeof deleteSandboxSandboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSandboxSandboxIdRouteHandler: RouteHandler<
  typeof getSandboxSandboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
