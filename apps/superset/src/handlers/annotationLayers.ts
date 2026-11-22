import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AnnotationLayerIndexRoute,
  deleteApiV1AnnotationLayerPkAnnotationAnnotationIdRoute,
  deleteApiV1AnnotationLayerPkAnnotationIndexRoute,
  deleteApiV1AnnotationLayerPkRoute,
  getApiV1AnnotationLayerIndexRoute,
  getApiV1AnnotationLayerInfoRoute,
  getApiV1AnnotationLayerPkAnnotationAnnotationIdRoute,
  getApiV1AnnotationLayerPkAnnotationIndexRoute,
  getApiV1AnnotationLayerPkRoute,
  getApiV1AnnotationLayerRelatedColumnNameRoute,
  postApiV1AnnotationLayerIndexRoute,
  postApiV1AnnotationLayerPkAnnotationIndexRoute,
  putApiV1AnnotationLayerPkAnnotationAnnotationIdRoute,
  putApiV1AnnotationLayerPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const annotationLayersHandler = app
  .openapi(deleteApiV1AnnotationLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnotationLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AnnotationLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnotationLayerInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnotationLayerRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AnnotationLayerPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnotationLayerPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AnnotationLayerPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AnnotationLayerPkAnnotationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnotationLayerPkAnnotationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AnnotationLayerPkAnnotationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AnnotationLayerPkAnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnotationLayerPkAnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AnnotationLayerPkAnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
