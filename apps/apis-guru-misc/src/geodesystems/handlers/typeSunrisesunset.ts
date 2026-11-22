import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeSunrisesunsetRoute } from '../routes'

const app = new OpenAPIHono()

export const typeSunrisesunsetHandler = app.openapi(
  getRepositorySearchTypeSunrisesunsetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
