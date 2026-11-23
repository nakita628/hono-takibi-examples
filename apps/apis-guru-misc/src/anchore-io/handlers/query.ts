import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQueryImagesByPackageRoute,
  getQueryImagesByVulnerabilityRoute,
  getQueryVulnerabilitiesRoute,
} from '../routes'

export const getQueryImagesByPackageRouteHandler: RouteHandler<
  typeof getQueryImagesByPackageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueryImagesByVulnerabilityRouteHandler: RouteHandler<
  typeof getQueryImagesByVulnerabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueryVulnerabilitiesRouteHandler: RouteHandler<
  typeof getQueryVulnerabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
