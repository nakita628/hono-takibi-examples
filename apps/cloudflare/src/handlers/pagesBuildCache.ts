import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdPagesProjectsProjectNamePurgeBuildCacheRoute } from '../routes'

const app = new OpenAPIHono()

export const pagesBuildCacheHandler = app.openapi(
  postAccountsAccountIdPagesProjectsProjectNamePurgeBuildCacheRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
