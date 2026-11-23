import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreImageFromRecycleBinRoute,
  postActionRestoreImageFromRecycleBinRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRestoreImageFromRecycleBinHandler = app
  .openapi(getActionRestoreImageFromRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreImageFromRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
