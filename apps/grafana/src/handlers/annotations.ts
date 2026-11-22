import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnnotationsAnnotationIdRoute,
  getAnnotationsAnnotationIdRoute,
  getAnnotationsRoute,
  getAnnotationsTagsRoute,
  patchAnnotationsAnnotationIdRoute,
  postAnnotationsGraphiteRoute,
  postAnnotationsMassDeleteRoute,
  postAnnotationsRoute,
  putAnnotationsAnnotationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const annotationsHandler = app
  .openapi(getAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnnotationsGraphiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnnotationsMassDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnnotationsAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnnotationsAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnnotationsAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnnotationsAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
