import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PreferenceCategoriesNameRoute,
  getV1PreferenceCategoriesRoute,
  putV1PreferenceCategoriesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const preferenceCategoriesHandler = app
  .openapi(getV1PreferenceCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PreferenceCategoriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PreferenceCategoriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
