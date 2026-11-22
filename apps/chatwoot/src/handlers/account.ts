import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1AccountsAccountIdRoute, patchApiV1AccountsAccountIdRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getApiV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
