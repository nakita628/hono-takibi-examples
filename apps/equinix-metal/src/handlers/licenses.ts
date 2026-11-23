import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteLicensesIdRoute, getLicensesIdRoute, putLicensesIdRoute } from '../routes'

export const deleteLicensesIdRouteHandler: RouteHandler<typeof deleteLicensesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLicensesIdRouteHandler: RouteHandler<typeof getLicensesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putLicensesIdRouteHandler: RouteHandler<typeof putLicensesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
