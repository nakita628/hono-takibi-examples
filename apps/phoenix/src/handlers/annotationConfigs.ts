import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AnnotationConfigsConfigIdRoute,
  deleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute,
  getV1AnnotationConfigsConfigIdentifierRoute,
  getV1AnnotationConfigsRoute,
  getV1ProjectsProjectIdentifierAnnotationConfigsRoute,
  postV1AnnotationConfigsRoute,
  putV1AnnotationConfigsConfigIdRoute,
  putV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute,
  putV1ProjectsProjectIdentifierAnnotationConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const annotationConfigsHandler = app
  .openapi(getV1AnnotationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AnnotationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnnotationConfigsConfigIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AnnotationConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AnnotationConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdentifierAnnotationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdentifierAnnotationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
