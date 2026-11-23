import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMasterBusinessPhasesRoute,
  getMasterCustomFieldsBusinessDefinitionsRoute,
  getMasterDealLineTypesRoute,
  getMasterEmployeesRoute,
  getMasterItemsRoute,
  getMasterMembersRoute,
  getMasterSalesProgressionsRoute,
} from '../routes'

export const getMasterBusinessPhasesRouteHandler: RouteHandler<
  typeof getMasterBusinessPhasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMasterSalesProgressionsRouteHandler: RouteHandler<
  typeof getMasterSalesProgressionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMasterItemsRouteHandler: RouteHandler<typeof getMasterItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMasterDealLineTypesRouteHandler: RouteHandler<
  typeof getMasterDealLineTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMasterEmployeesRouteHandler: RouteHandler<typeof getMasterEmployeesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMasterMembersRouteHandler: RouteHandler<typeof getMasterMembersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMasterCustomFieldsBusinessDefinitionsRouteHandler: RouteHandler<
  typeof getMasterCustomFieldsBusinessDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
