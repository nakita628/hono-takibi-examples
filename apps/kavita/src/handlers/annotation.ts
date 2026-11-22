import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAnnotationRoute,
  getApiAnnotationAllForSeriesRoute,
  getApiAnnotationAllRoute,
  getApiAnnotationAnnotationIdRoute,
  postApiAnnotationAllFilteredRoute,
  postApiAnnotationBulkDeleteRoute,
  postApiAnnotationCreateRoute,
  postApiAnnotationExportFilterRoute,
  postApiAnnotationExportRoute,
  postApiAnnotationLikeRoute,
  postApiAnnotationUnlikeRoute,
  postApiAnnotationUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const annotationHandler = app
  .openapi(postApiAnnotationAllFilteredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAnnotationAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAnnotationAllForSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationUnlikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAnnotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationExportFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationExportRoute, (c) => {
    throw new Error('Not implemented')
  })
