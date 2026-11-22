import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2AccountsAvailableRoute, postApiV2AccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const resellerHandler = app
  .openapi(postApiV2AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
