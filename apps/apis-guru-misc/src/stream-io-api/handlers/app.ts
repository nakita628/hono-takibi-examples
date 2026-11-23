import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppRoute, patchAppRoute } from '../routes'

const app = new OpenAPIHono()

export const appHandler = app
  .openapi(getAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppRoute, (c) => {
    throw new Error('Not implemented')
  })
