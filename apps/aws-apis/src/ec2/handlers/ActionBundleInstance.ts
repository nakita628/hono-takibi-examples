import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionBundleInstanceRoute, postActionBundleInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionBundleInstanceHandler = app
  .openapi(getActionBundleInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionBundleInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
