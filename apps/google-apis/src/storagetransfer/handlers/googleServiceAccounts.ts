import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1GoogleServiceAccountsProjectIdRoute } from '../routes'

const app = new OpenAPIHono()

export const googleServiceAccountsHandler = app.openapi(
  getV1GoogleServiceAccountsProjectIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
