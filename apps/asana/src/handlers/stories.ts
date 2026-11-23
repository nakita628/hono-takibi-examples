import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStoriesStoryGidRoute,
  getStoriesStoryGidRoute,
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
