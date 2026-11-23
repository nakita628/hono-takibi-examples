import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInstitutionsIdRoute,
  getInstitutionsIdAccountsRoute,
  getInstitutionsIdRoute,
  putInstitutionsIdRoute,
} from '../routes'

export const deleteInstitutionsIdRouteHandler: RouteHandler<
  typeof deleteInstitutionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstitutionsIdRouteHandler: RouteHandler<typeof getInstitutionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putInstitutionsIdRouteHandler: RouteHandler<typeof putInstitutionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getInstitutionsIdAccountsRouteHandler: RouteHandler<
  typeof getInstitutionsIdAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
