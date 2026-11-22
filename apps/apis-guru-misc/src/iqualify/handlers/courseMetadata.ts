import { OpenAPIHono } from '@hono/zod-openapi'
import {
  putCoursesContentIdMetadataCategoryRoute,
  putCoursesContentIdMetadataLevelRoute,
  putCoursesContentIdMetadataTagsRoute,
  putCoursesContentIdMetadataTopicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const courseMetadataHandler = app
  .openapi(putCoursesContentIdMetadataCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCoursesContentIdMetadataLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCoursesContentIdMetadataTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCoursesContentIdMetadataTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
