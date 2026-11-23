import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProjectsUsernameProjectSlugFiltersIdentifierRoute,
  getProjectsUsernameProjectSlugFiltersRoute,
  getProjectsUsernameRoute,
  postProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorRoute,
  postProjectsUsernameProjectSlugUrlsAggsRoute,
} from '../routes'

export const getProjectsUsernameRouteHandler: RouteHandler<
  typeof getProjectsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorRouteHandler: RouteHandler<
  typeof postProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsUsernameProjectSlugFiltersRouteHandler: RouteHandler<
  typeof getProjectsUsernameProjectSlugFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsUsernameProjectSlugFiltersIdentifierRouteHandler: RouteHandler<
  typeof getProjectsUsernameProjectSlugFiltersIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsUsernameProjectSlugUrlsAggsRouteHandler: RouteHandler<
  typeof postProjectsUsernameProjectSlugUrlsAggsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
