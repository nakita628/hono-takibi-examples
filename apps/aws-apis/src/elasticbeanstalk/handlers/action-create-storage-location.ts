import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateStorageLocationRoute,
  postActionCreateStorageLocationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateStorageLocationHandler = app
  .openapi(getActionCreateStorageLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateStorageLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
