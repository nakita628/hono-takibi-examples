import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdBuildsReposProviderTypeProviderAccountIdRepoIdConfigAutofillRoute } from '../routes'

const app = new OpenAPIHono()

export const gitHubIntegrationHandler = app.openapi(
  getAccountsAccountIdBuildsReposProviderTypeProviderAccountIdRepoIdConfigAutofillRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
