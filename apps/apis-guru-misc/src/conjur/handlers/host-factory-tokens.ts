import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteHostFactoryTokensTokenRoute, postHostFactoryTokensRoute } from '../routes'

const app = new OpenAPIHono()

export const hostFactoryTokensHandler = app
  .openapi(postHostFactoryTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHostFactoryTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
