import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdContainersApplicationsApplicationIdRolloutsRoute } from '../routes'

const app = new OpenAPIHono()

export const rolloutsHandler = app.openapi(
  postAccountsAccountIdContainersApplicationsApplicationIdRolloutsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
