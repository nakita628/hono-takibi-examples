import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2CiGithubAccountsRoute, patchApiV2CiGithubAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const ciVisibilityGitHubAccountsHandler = app
  .openapi(getApiV2CiGithubAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CiGithubAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
