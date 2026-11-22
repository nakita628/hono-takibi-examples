import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdFlagshipAppsAppIdFlagsFlagKeyChangelogRoute } from '../routes'

const app = new OpenAPIHono()

export const changelogHandler = app.openapi(
  getAccountsAccountIdFlagshipAppsAppIdFlagsFlagKeyChangelogRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
