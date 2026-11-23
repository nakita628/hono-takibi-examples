import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getJsonEmailYOURAPIKEYHEREUSEREMAILHERERoute,
  getJsonPhoneYOURAPIKEYHEREUSERPHONEHERERoute,
  getJsonUrlYOURAPIKEYHEREURLHERERoute,
} from '../routes'

export const getJsonEmailYOURAPIKEYHEREUSEREMAILHERERouteHandler: RouteHandler<
  typeof getJsonEmailYOURAPIKEYHEREUSEREMAILHERERoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getJsonPhoneYOURAPIKEYHEREUSERPHONEHERERouteHandler: RouteHandler<
  typeof getJsonPhoneYOURAPIKEYHEREUSERPHONEHERERoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getJsonUrlYOURAPIKEYHEREURLHERERouteHandler: RouteHandler<
  typeof getJsonUrlYOURAPIKEYHEREURLHERERoute
> = async (c) => {
  throw new Error('Not implemented')
}
