import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha1NameRoute,
  getV1alpha1ClaimsSearchRoute,
  getV1alpha1NameRoute,
  getV1alpha1PagesRoute,
  postV1alpha1PagesRoute,
  putV1alpha1NameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1alpha1Handler = app
  .openapi(getV1alpha1ClaimsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1PagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1PagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
