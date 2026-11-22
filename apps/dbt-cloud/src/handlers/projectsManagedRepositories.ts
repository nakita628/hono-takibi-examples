import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsManagedRepositoriesHandler = app.openapi(
  getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
