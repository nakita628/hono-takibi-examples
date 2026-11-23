import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1TaxesTaxRateUuidRoute,
  getV1TaxesCountRoute,
  getV1TaxesRoute,
  getV1TaxesSettingsRoute,
  getV1TaxesTaxRateUuidRoute,
  postV1TaxesRoute,
  putV1TaxesSettingsRoute,
  putV1TaxesTaxRateUuidRoute,
} from '../routes'

export const getV1TaxesRouteHandler: RouteHandler<typeof getV1TaxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TaxesRouteHandler: RouteHandler<typeof postV1TaxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxesCountRouteHandler: RouteHandler<typeof getV1TaxesCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxesSettingsRouteHandler: RouteHandler<typeof getV1TaxesSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1TaxesSettingsRouteHandler: RouteHandler<typeof putV1TaxesSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1TaxesTaxRateUuidRouteHandler: RouteHandler<
  typeof deleteV1TaxesTaxRateUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxesTaxRateUuidRouteHandler: RouteHandler<
  typeof getV1TaxesTaxRateUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TaxesTaxRateUuidRouteHandler: RouteHandler<
  typeof putV1TaxesTaxRateUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
