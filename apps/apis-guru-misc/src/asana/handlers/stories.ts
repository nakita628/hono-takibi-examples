import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStoriesStoryGidRoute,
  getStoriesStoryGidRoute,
  getTasksTaskGidStoriesRoute,
  postTasksTaskGidStoriesRoute,
  putStoriesStoryGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storiesHandler = app
  .openapi(deleteStoriesStoryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoriesStoryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStoriesStoryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskGidStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
