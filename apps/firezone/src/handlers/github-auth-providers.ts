import { OpenAPIHono } from '@hono/zod-openapi'
import { getGithubAuthProvidersIdRoute, getGithubAuthProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const githubAuthProvidersHandler = app
  .openapi(getGithubAuthProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubAuthProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
