import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStoriesRoute,
  getStoriesStoryIdRoute,
  postStoriesRoute,
  postStoriesStoryIdViewedRoute,
  putStoriesStoryIdLikeRoute,
  putStoriesStoryIdUnlikeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storiesHandler = app
  .openapi(getStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoriesStoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStoriesStoryIdLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStoriesStoryIdUnlikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoriesStoryIdViewedRoute, (c) => {
    throw new Error('Not implemented')
  })
