import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdTagsWordRoute,
  getTagsWordVideosRoute,
  getVideosVideoIdTagsRoute,
  getVideosVideoIdTagsWordRoute,
  putVideosVideoIdTagsRoute,
  putVideosVideoIdTagsWordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosTagsHandler = app
  .openapi(getTagsWordVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
