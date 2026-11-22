import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppprofileIdRoute,
  getApiV1AppprofileIdRoute,
  getApiV1AppprofileRoute,
  getApiV1AppprofileSchemaRoute,
  postApiV1AppprofileRoute,
  putApiV1AppprofileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appProfileHandler = app
  .openapi(postApiV1AppprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppprofileSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
