import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDigestAuthQopUserPasswdAlgorithmRoute,
  getDigestAuthQopUserPasswdAlgorithmStaleAfterRoute,
  getDigestAuthQopUserPasswdRoute,
} from '../routes'

export const getDigestAuthQopUserPasswdRouteHandler: RouteHandler<
  typeof getDigestAuthQopUserPasswdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDigestAuthQopUserPasswdAlgorithmRouteHandler: RouteHandler<
  typeof getDigestAuthQopUserPasswdAlgorithmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDigestAuthQopUserPasswdAlgorithmStaleAfterRouteHandler: RouteHandler<
  typeof getDigestAuthQopUserPasswdAlgorithmStaleAfterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
