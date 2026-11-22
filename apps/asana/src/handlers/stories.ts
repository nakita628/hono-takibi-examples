import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStoriesStoryGidRoute,
  getGoalsGoalGidStoriesRoute,
  getRecordsRecordGidStoriesRoute,
  getStoriesStoryGidRoute,
  getTasksTaskGidStoriesRoute,
  postGoalsGoalGidStoriesRoute,
  postRecordsRecordGidStoriesRoute,
  postTasksTaskGidStoriesRoute,
  putStoriesStoryGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storiesHandler = app
  .openapi(getStoriesStoryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStoriesStoryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStoriesStoryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskGidStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordsRecordGidStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecordsRecordGidStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGoalsGoalGidStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
