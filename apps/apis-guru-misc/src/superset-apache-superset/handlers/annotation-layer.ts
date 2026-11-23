import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnnotationLayerIndexRoute,
  deleteAnnotationLayerPkAnnotationAnnotationIdRoute,
  deleteAnnotationLayerPkAnnotationIndexRoute,
  deleteAnnotationLayerPkRoute,
  getAnnotationLayerIndexRoute,
  getAnnotationLayerInfoRoute,
  getAnnotationLayerPkAnnotationAnnotationIdRoute,
  getAnnotationLayerPkAnnotationIndexRoute,
  getAnnotationLayerPkRoute,
  getAnnotationLayerRelatedColumnNameRoute,
  postAnnotationLayerIndexRoute,
  postAnnotationLayerPkAnnotationIndexRoute,
  putAnnotationLayerPkAnnotationAnnotationIdRoute,
  putAnnotationLayerPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const annotationLayerHandler = app
  .openapi(deleteAnnotationLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnnotationLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationLayerInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationLayerRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnnotationLayerPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationLayerPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnnotationLayerPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnnotationLayerPkAnnotationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationLayerPkAnnotationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnnotationLayerPkAnnotationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnnotationLayerPkAnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationLayerPkAnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnnotationLayerPkAnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
