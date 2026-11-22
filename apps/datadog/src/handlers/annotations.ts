import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AnnotationAnnotationIdRoute,
  getApiV2AnnotationPagePageIdRoute,
  getApiV2AnnotationRoute,
  postApiV2AnnotationRoute,
  putApiV2AnnotationAnnotationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const annotationsHandler = app
  .openapi(getApiV2AnnotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AnnotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AnnotationPagePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
