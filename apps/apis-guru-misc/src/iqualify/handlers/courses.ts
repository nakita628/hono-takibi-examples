import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCoursesContentIdActivationsRoute,
  getCoursesContentIdPermissionsRoute,
  getCoursesContentIdRoute,
  getCoursesRoute,
  postCoursesRootContentIdPermissionsUserEmailRoute,
  putCoursesContentIdMetadataCategoryRoute,
  putCoursesContentIdMetadataLevelRoute,
  putCoursesContentIdMetadataTagsRoute,
  putCoursesContentIdMetadataTopicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const coursesHandler = app
  .openapi(getCoursesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoursesContentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoursesContentIdActivationsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getCoursesContentIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoursesRootContentIdPermissionsUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
