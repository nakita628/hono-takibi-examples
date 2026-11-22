import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21AccountsAccountIdSealsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountSealProvidersHandler = app.openapi(getV21AccountsAccountIdSealsRoute, (c) => {
  throw new Error('Not implemented')
})
