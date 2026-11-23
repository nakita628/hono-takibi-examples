import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateRestoreImageTaskRoute,
  postActionCreateRestoreImageTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateRestoreImageTaskHandler = app
  .openapi(getActionCreateRestoreImageTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateRestoreImageTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
