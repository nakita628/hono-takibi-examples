import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionConfirmProductInstanceRoute,
  postActionConfirmProductInstanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionConfirmProductInstanceHandler = app
  .openapi(getActionConfirmProductInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionConfirmProductInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
