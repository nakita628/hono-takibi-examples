import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteArchivesImagesImageDigestRoute,
  deleteArchivesRulesRuleIdRoute,
  getArchivesImagesImageDigestRoute,
  getArchivesImagesRoute,
  getArchivesRoute,
  getArchivesRulesRoute,
  getArchivesRulesRuleIdRoute,
  postArchivesImagesRoute,
  postArchivesRulesRoute,
} from '../routes'

export const getArchivesRouteHandler: RouteHandler<typeof getArchivesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getArchivesImagesRouteHandler: RouteHandler<typeof getArchivesImagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postArchivesImagesRouteHandler: RouteHandler<typeof postArchivesImagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteArchivesImagesImageDigestRouteHandler: RouteHandler<
  typeof deleteArchivesImagesImageDigestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArchivesImagesImageDigestRouteHandler: RouteHandler<
  typeof getArchivesImagesImageDigestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArchivesRulesRouteHandler: RouteHandler<typeof getArchivesRulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postArchivesRulesRouteHandler: RouteHandler<typeof postArchivesRulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteArchivesRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteArchivesRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArchivesRulesRuleIdRouteHandler: RouteHandler<
  typeof getArchivesRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
