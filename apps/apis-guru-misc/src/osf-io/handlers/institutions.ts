import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInstitutionsIndexRoute,
  getInstitutionsInstitutionIdIndexRoute,
  getInstitutionsInstitutionIdNodesIndexRoute,
  getInstitutionsInstitutionIdRegistrationsIndexRoute,
  getInstitutionsInstitutionIdUsersIndexRoute,
} from '../routes'

export const getInstitutionsIndexRouteHandler: RouteHandler<
  typeof getInstitutionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstitutionsInstitutionIdIndexRouteHandler: RouteHandler<
  typeof getInstitutionsInstitutionIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstitutionsInstitutionIdNodesIndexRouteHandler: RouteHandler<
  typeof getInstitutionsInstitutionIdNodesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstitutionsInstitutionIdRegistrationsIndexRouteHandler: RouteHandler<
  typeof getInstitutionsInstitutionIdRegistrationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstitutionsInstitutionIdUsersIndexRouteHandler: RouteHandler<
  typeof getInstitutionsInstitutionIdUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
