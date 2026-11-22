import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHostFactoryTokensTokenRoute,
  postHostFactoriesHostsRoute,
  postHostFactoryTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hostFactoryHandler = app
  .openapi(postHostFactoriesHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostFactoryTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHostFactoryTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
