import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4ProjectsIdCiLintRoute, postApiV4ProjectsIdCiLintRoute } from '../routes'

const app = new OpenAPIHono()

export const ciLintHandler = app
  .openapi(getApiV4ProjectsIdCiLintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdCiLintRoute, (c) => {
    throw new Error('Not implemented')
  })
