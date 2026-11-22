import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableImageDeprecationRoute,
  postActionEnableImageDeprecationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionEnableImageDeprecationHandler = app
  .openapi(getActionEnableImageDeprecationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableImageDeprecationRoute, (c) => {
    throw new Error('Not implemented')
  })
