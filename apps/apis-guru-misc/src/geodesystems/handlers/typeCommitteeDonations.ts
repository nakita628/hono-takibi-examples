import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeCommitteeDonationsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeCommitteeDonationsHandler = app.openapi(
  getRepositorySearchTypeCommitteeDonationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
