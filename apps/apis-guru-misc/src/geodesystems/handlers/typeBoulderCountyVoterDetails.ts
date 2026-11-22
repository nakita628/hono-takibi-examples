import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBoulderCountyVoterDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBoulderCountyVoterDetailsHandler = app.openapi(
  getRepositorySearchTypeBoulderCountyVoterDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
