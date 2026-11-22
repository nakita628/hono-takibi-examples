import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdCloudforceOneEventsDatasetsPopulateRoute } from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app.openapi(
  postAccountsAccountIdCloudforceOneEventsDatasetsPopulateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
