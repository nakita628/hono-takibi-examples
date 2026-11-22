import { OpenAPIHono } from '@hono/zod-openapi'
import { getGitignoreTemplatesNameRoute, getGitignoreTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const gitignoreHandler = app
  .openapi(getGitignoreTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGitignoreTemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
