import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSchemasRegistrationsIndexRoute,
  getSchemasRegistrationsRegistrationSchemaIdRoute,
} from '../routes'

export const getSchemasRegistrationsIndexRouteHandler: RouteHandler<
  typeof getSchemasRegistrationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchemasRegistrationsRegistrationSchemaIdRouteHandler: RouteHandler<
  typeof getSchemasRegistrationsRegistrationSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
