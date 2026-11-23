import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableImageDeprecationRoute,
  postActionEnableImageDeprecationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionEnableImageDeprecationHandler = app
  .openapi(getActionEnableImageDeprecationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableImageDeprecationRoute, (c) => {
    throw new Error('Not implemented')
  })
