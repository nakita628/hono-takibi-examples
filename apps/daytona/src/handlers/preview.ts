import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPreviewSandboxIdAccessRoute,
  getPreviewSandboxIdPublicRoute,
  getPreviewSandboxIdValidateAuthTokenRoute,
  getPreviewSignedPreviewTokenPortSandboxIdRoute,
} from '../routes'

export const getPreviewSandboxIdPublicRouteHandler: RouteHandler<
  typeof getPreviewSandboxIdPublicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPreviewSandboxIdValidateAuthTokenRouteHandler: RouteHandler<
  typeof getPreviewSandboxIdValidateAuthTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPreviewSandboxIdAccessRouteHandler: RouteHandler<
  typeof getPreviewSandboxIdAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPreviewSignedPreviewTokenPortSandboxIdRouteHandler: RouteHandler<
  typeof getPreviewSignedPreviewTokenPortSandboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
