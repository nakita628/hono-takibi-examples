import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRegionsIdRoute,
  getRegionsIdRoute,
  getRegionsRoute,
  patchRegionsIdRoute,
  postRegionsIdRegenerateProxyApiKeyRoute,
  postRegionsIdRegenerateSnapshotManagerCredentialsRoute,
  postRegionsIdRegenerateSshGatewayApiKeyRoute,
  postRegionsRoute,
} from '../routes'

export const getRegionsRouteHandler: RouteHandler<typeof getRegionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRegionsRouteHandler: RouteHandler<typeof postRegionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRegionsIdRouteHandler: RouteHandler<typeof deleteRegionsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRegionsIdRouteHandler: RouteHandler<typeof getRegionsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRegionsIdRouteHandler: RouteHandler<typeof patchRegionsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRegionsIdRegenerateProxyApiKeyRouteHandler: RouteHandler<
  typeof postRegionsIdRegenerateProxyApiKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRegionsIdRegenerateSshGatewayApiKeyRouteHandler: RouteHandler<
  typeof postRegionsIdRegenerateSshGatewayApiKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRegionsIdRegenerateSnapshotManagerCredentialsRouteHandler: RouteHandler<
  typeof postRegionsIdRegenerateSnapshotManagerCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
