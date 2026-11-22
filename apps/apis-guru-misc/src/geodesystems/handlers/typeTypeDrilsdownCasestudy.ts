import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeDrilsdownCasestudyRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeDrilsdownCasestudyHandler = app.openapi(
  getRepositorySearchTypeTypeDrilsdownCasestudyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
