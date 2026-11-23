import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEnvironmentsNameRoute,
  getEnvironmentsNameRoute,
  getEnvironmentsRoute,
  patchEnvironmentsNameRoute,
  putEnvironmentsNameRoute,
} from '../routes'

export const putEnvironmentsNameRouteHandler: RouteHandler<
  typeof putEnvironmentsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEnvironmentsNameRouteHandler: RouteHandler<
  typeof deleteEnvironmentsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnvironmentsNameRouteHandler: RouteHandler<
  typeof getEnvironmentsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEnvironmentsNameRouteHandler: RouteHandler<
  typeof patchEnvironmentsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnvironmentsRouteHandler: RouteHandler<typeof getEnvironmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}
