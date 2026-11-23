import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIntegrationsIdRoute,
  getIntegrationsIdRoute,
  getIntegrationsRoute,
  postIntegrationsRoute,
  putIntegrationsIdAttachSourceIdRoute,
  putIntegrationsIdDetachSourceIdRoute,
  putIntegrationsIdRoute,
} from '../routes'

export const getIntegrationsRouteHandler: RouteHandler<typeof getIntegrationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIntegrationsRouteHandler: RouteHandler<typeof postIntegrationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getIntegrationsIdRouteHandler: RouteHandler<typeof getIntegrationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putIntegrationsIdRouteHandler: RouteHandler<typeof putIntegrationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIntegrationsIdRouteHandler: RouteHandler<
  typeof deleteIntegrationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIntegrationsIdAttachSourceIdRouteHandler: RouteHandler<
  typeof putIntegrationsIdAttachSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIntegrationsIdDetachSourceIdRouteHandler: RouteHandler<
  typeof putIntegrationsIdDetachSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
