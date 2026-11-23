import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSearchDeveloperRoute,
  getSearchGovRoute,
  getSearchResearchPapersIdRoute,
  getSearchResearchPapersIdSimilarRoute,
  getSearchResearchPapersRoute,
  postSearchDeveloperRoute,
  postSearchGovRoute,
  postSearchJobIdFeedbackRoute,
  postSearchRoute,
} from '../routes'

export const postSearchRouteHandler: RouteHandler<typeof postSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchJobIdFeedbackRouteHandler: RouteHandler<
  typeof postSearchJobIdFeedbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchResearchPapersRouteHandler: RouteHandler<
  typeof getSearchResearchPapersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchResearchPapersIdRouteHandler: RouteHandler<
  typeof getSearchResearchPapersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchResearchPapersIdSimilarRouteHandler: RouteHandler<
  typeof getSearchResearchPapersIdSimilarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchDeveloperRouteHandler: RouteHandler<typeof getSearchDeveloperRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSearchDeveloperRouteHandler: RouteHandler<
  typeof postSearchDeveloperRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchGovRouteHandler: RouteHandler<typeof getSearchGovRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchGovRouteHandler: RouteHandler<typeof postSearchGovRoute> = async (c) => {
  throw new Error('Not implemented')
}
