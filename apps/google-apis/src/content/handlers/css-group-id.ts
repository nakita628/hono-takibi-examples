import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCssGroupIdCssesCssDomainIdRoute,
  getCssGroupIdCssesRoute,
  postCssGroupIdCssesCssDomainIdUpdatelabelsRoute,
} from '../routes'

export const getCssGroupIdCssesRouteHandler: RouteHandler<typeof getCssGroupIdCssesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCssGroupIdCssesCssDomainIdRouteHandler: RouteHandler<
  typeof getCssGroupIdCssesCssDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCssGroupIdCssesCssDomainIdUpdatelabelsRouteHandler: RouteHandler<
  typeof postCssGroupIdCssesCssDomainIdUpdatelabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
