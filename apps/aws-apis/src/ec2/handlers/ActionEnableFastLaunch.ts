import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionEnableFastLaunchRoute, postActionEnableFastLaunchRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionEnableFastLaunchHandler = app
  .openapi(getActionEnableFastLaunchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableFastLaunchRoute, (c) => {
    throw new Error('Not implemented')
  })
