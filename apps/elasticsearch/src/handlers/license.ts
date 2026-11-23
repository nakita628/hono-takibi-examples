import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLicenseRoute,
  getLicenseBasicStatusRoute,
  getLicenseRoute,
  getLicenseTrialStatusRoute,
  postLicenseRoute,
  postLicenseStartBasicRoute,
  postLicenseStartTrialRoute,
  putLicenseRoute,
} from '../routes'

export const getLicenseRouteHandler: RouteHandler<typeof getLicenseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putLicenseRouteHandler: RouteHandler<typeof putLicenseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLicenseRouteHandler: RouteHandler<typeof postLicenseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLicenseRouteHandler: RouteHandler<typeof deleteLicenseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLicenseBasicStatusRouteHandler: RouteHandler<
  typeof getLicenseBasicStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLicenseTrialStatusRouteHandler: RouteHandler<
  typeof getLicenseTrialStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLicenseStartBasicRouteHandler: RouteHandler<
  typeof postLicenseStartBasicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLicenseStartTrialRouteHandler: RouteHandler<
  typeof postLicenseStartTrialRoute
> = async (c) => {
  throw new Error('Not implemented')
}
