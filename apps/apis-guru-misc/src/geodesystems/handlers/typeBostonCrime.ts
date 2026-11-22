import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBostonCrimeRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBostonCrimeHandler = app.openapi(getRepositorySearchTypeBostonCrimeRoute, (c) => {
  throw new Error('Not implemented')
})
