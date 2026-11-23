import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLicenseeLicenseeNumberRoute,
  getLicenseeLicenseeNumberRoute,
  getLicenseeRoute,
  postLicenseeLicenseeNumberRoute,
  postLicenseeLicenseeNumberTransferRoute,
  postLicenseeLicenseeNumberValidateRoute,
  postLicenseeRoute,
} from '../routes'

export const getLicenseeRouteHandler: RouteHandler<typeof getLicenseeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLicenseeRouteHandler: RouteHandler<typeof postLicenseeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLicenseeLicenseeNumberRouteHandler: RouteHandler<
  typeof deleteLicenseeLicenseeNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLicenseeLicenseeNumberRouteHandler: RouteHandler<
  typeof getLicenseeLicenseeNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLicenseeLicenseeNumberRouteHandler: RouteHandler<
  typeof postLicenseeLicenseeNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLicenseeLicenseeNumberTransferRouteHandler: RouteHandler<
  typeof postLicenseeLicenseeNumberTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLicenseeLicenseeNumberValidateRouteHandler: RouteHandler<
  typeof postLicenseeLicenseeNumberValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
