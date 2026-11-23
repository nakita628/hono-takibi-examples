import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQuestionsFeaturedRoute,
  getQuestionsIdsAnswersRoute,
  getQuestionsIdsCommentsRoute,
  getQuestionsIdsLinkedRoute,
  getQuestionsIdsRelatedRoute,
  getQuestionsIdsRoute,
  getQuestionsIdsTimelineRoute,
  getQuestionsNoAnswersRoute,
  getQuestionsRoute,
  getQuestionsUnansweredRoute,
} from '../routes'

export const getQuestionsRouteHandler: RouteHandler<typeof getQuestionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuestionsFeaturedRouteHandler: RouteHandler<
  typeof getQuestionsFeaturedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuestionsNoAnswersRouteHandler: RouteHandler<
  typeof getQuestionsNoAnswersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuestionsUnansweredRouteHandler: RouteHandler<
  typeof getQuestionsUnansweredRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuestionsIdsRouteHandler: RouteHandler<typeof getQuestionsIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuestionsIdsAnswersRouteHandler: RouteHandler<
  typeof getQuestionsIdsAnswersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuestionsIdsCommentsRouteHandler: RouteHandler<
  typeof getQuestionsIdsCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuestionsIdsLinkedRouteHandler: RouteHandler<
  typeof getQuestionsIdsLinkedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuestionsIdsRelatedRouteHandler: RouteHandler<
  typeof getQuestionsIdsRelatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuestionsIdsTimelineRouteHandler: RouteHandler<
  typeof getQuestionsIdsTimelineRoute
> = async (c) => {
  throw new Error('Not implemented')
}
