import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchType2017BoulderElectionExpendituresRoute } from '../routes'

const app = new OpenAPIHono()

export const type2017BoulderElectionExpendituresHandler = app.openapi(
  getRepositorySearchType2017BoulderElectionExpendituresRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
