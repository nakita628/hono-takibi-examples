import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCancelBundleTaskRoute, postActionCancelBundleTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCancelBundleTaskHandler = app
  .openapi(getActionCancelBundleTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelBundleTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
