import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWebsocketAttachRoute,
  getWebsocketExecRoute,
  getWebsocketKubernetesShellRoute,
  getWebsocketPodRoute,
} from '../routes'

export const getWebsocketAttachRouteHandler: RouteHandler<typeof getWebsocketAttachRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWebsocketExecRouteHandler: RouteHandler<typeof getWebsocketExecRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWebsocketKubernetesShellRouteHandler: RouteHandler<
  typeof getWebsocketKubernetesShellRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebsocketPodRouteHandler: RouteHandler<typeof getWebsocketPodRoute> = async (c) => {
  throw new Error('Not implemented')
}
