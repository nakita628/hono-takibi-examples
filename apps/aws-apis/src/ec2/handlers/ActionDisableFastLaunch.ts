import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDisableFastLaunchRoute, postActionDisableFastLaunchRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDisableFastLaunchHandler = app
  .openapi(getActionDisableFastLaunchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableFastLaunchRoute, (c) => {
    throw new Error('Not implemented')
  })
