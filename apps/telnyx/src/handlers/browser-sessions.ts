import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBrowserSessionsIdRoute,
  getBrowserSessionsIdActionsActionIdRoute,
  getBrowserSessionsIdArtifactsArtifactIdRoute,
  getBrowserSessionsIdRoute,
  getBrowserSessionsRoute,
  postBrowserSessionsIdActionsRoute,
  postBrowserSessionsRoute,
} from '../routes'

export const getBrowserSessionsRouteHandler: RouteHandler<typeof getBrowserSessionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBrowserSessionsRouteHandler: RouteHandler<
  typeof postBrowserSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBrowserSessionsIdRouteHandler: RouteHandler<
  typeof deleteBrowserSessionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBrowserSessionsIdRouteHandler: RouteHandler<
  typeof getBrowserSessionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBrowserSessionsIdActionsRouteHandler: RouteHandler<
  typeof postBrowserSessionsIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBrowserSessionsIdActionsActionIdRouteHandler: RouteHandler<
  typeof getBrowserSessionsIdActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBrowserSessionsIdArtifactsArtifactIdRouteHandler: RouteHandler<
  typeof getBrowserSessionsIdArtifactsArtifactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
