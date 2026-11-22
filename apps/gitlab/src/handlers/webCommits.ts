import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4WebCommitsPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const webCommitsHandler = app.openapi(getApiV4WebCommitsPublicKeyRoute, (c) => {
  throw new Error('Not implemented')
})
