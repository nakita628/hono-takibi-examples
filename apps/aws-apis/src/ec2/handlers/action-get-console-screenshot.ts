import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetConsoleScreenshotRoute, postActionGetConsoleScreenshotRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetConsoleScreenshotHandler = app
  .openapi(getActionGetConsoleScreenshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetConsoleScreenshotRoute, (c) => {
    throw new Error('Not implemented')
  })
