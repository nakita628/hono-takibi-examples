import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const questionsHandler = app
  .openapi(getQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuestionsFeaturedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuestionsNoAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuestionsUnansweredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuestionsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuestionsIdsAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuestionsIdsCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuestionsIdsLinkedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuestionsIdsRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuestionsIdsTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
