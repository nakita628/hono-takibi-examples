import { OpenAPIHono } from '@hono/zod-openapi'
import { getFrameworksIdIndexRoute, getFrameworksIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const frameworksHandler = app
  .openapi(getFrameworksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFrameworksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
