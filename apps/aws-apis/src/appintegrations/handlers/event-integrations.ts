import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEventIntegrationsNameRoute,
  getEventIntegrationsNameAssociationsRoute,
  getEventIntegrationsNameRoute,
  getEventIntegrationsRoute,
  patchEventIntegrationsNameRoute,
  postEventIntegrationsRoute,
} from '../routes'

export const postEventIntegrationsRouteHandler: RouteHandler<
  typeof postEventIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventIntegrationsRouteHandler: RouteHandler<
  typeof getEventIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEventIntegrationsNameRouteHandler: RouteHandler<
  typeof deleteEventIntegrationsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventIntegrationsNameRouteHandler: RouteHandler<
  typeof getEventIntegrationsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEventIntegrationsNameRouteHandler: RouteHandler<
  typeof patchEventIntegrationsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventIntegrationsNameAssociationsRouteHandler: RouteHandler<
  typeof getEventIntegrationsNameAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
