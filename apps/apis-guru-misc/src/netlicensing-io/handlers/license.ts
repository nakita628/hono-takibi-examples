import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLicenseLicenseNumberRoute,
  getLicenseLicenseNumberRoute,
  getLicenseRoute,
  postLicenseLicenseNumberRoute,
  postLicenseRoute,
} from '../routes'

export const getLicenseRouteHandler: RouteHandler<typeof getLicenseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLicenseRouteHandler: RouteHandler<typeof postLicenseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLicenseLicenseNumberRouteHandler: RouteHandler<
  typeof deleteLicenseLicenseNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLicenseLicenseNumberRouteHandler: RouteHandler<
  typeof getLicenseLicenseNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLicenseLicenseNumberRouteHandler: RouteHandler<
  typeof postLicenseLicenseNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
