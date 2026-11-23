import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTicketTypesRoute,
  getTicketTypesTicketTypeIdRoute,
  postTicketTypesRoute,
  postTicketTypesTicketTypeIdAttributesRoute,
  putTicketTypesTicketTypeIdAttributesAttributeIdRoute,
  putTicketTypesTicketTypeIdRoute,
} from '../routes'

export const postTicketTypesTicketTypeIdAttributesRouteHandler: RouteHandler<
  typeof postTicketTypesTicketTypeIdAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTicketTypesTicketTypeIdAttributesAttributeIdRouteHandler: RouteHandler<
  typeof putTicketTypesTicketTypeIdAttributesAttributeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTicketTypesRouteHandler: RouteHandler<typeof getTicketTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTicketTypesRouteHandler: RouteHandler<typeof postTicketTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTicketTypesTicketTypeIdRouteHandler: RouteHandler<
  typeof getTicketTypesTicketTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTicketTypesTicketTypeIdRouteHandler: RouteHandler<
  typeof putTicketTypesTicketTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
