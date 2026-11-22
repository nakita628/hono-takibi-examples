import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1EmailLayoutsEmailLayoutKeyRoute,
  getV1EmailLayoutsRoute,
  postV1EmailLayoutsPreviewRoute,
  putV1EmailLayoutsEmailLayoutKeyRoute,
  putV1EmailLayoutsEmailLayoutKeyValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailLayoutsHandler = app
  .openapi(postV1EmailLayoutsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailLayoutsEmailLayoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailLayoutsEmailLayoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailLayoutsEmailLayoutKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailLayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
