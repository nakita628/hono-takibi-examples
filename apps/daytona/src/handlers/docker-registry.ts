import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDockerRegistryIdRoute,
  getDockerRegistryIdRoute,
  getDockerRegistryRegistryPushAccessRoute,
  getDockerRegistryRoute,
  patchDockerRegistryIdRoute,
  postDockerRegistryRoute,
} from '../routes'

export const getDockerRegistryRouteHandler: RouteHandler<typeof getDockerRegistryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDockerRegistryRouteHandler: RouteHandler<typeof postDockerRegistryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDockerRegistryRegistryPushAccessRouteHandler: RouteHandler<
  typeof getDockerRegistryRegistryPushAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDockerRegistryIdRouteHandler: RouteHandler<
  typeof deleteDockerRegistryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDockerRegistryIdRouteHandler: RouteHandler<
  typeof getDockerRegistryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDockerRegistryIdRouteHandler: RouteHandler<
  typeof patchDockerRegistryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
