import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeCensusAcsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeCensusAcsHandler = app.openapi(
  getRepositorySearchTypeTypeCensusAcsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
