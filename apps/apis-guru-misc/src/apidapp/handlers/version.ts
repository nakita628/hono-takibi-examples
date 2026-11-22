import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionRoute, optionsVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const versionHandler = app
  .openapi(getVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
