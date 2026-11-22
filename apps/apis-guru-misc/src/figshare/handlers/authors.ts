import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountAuthorsAuthorIdRoute, postAccountAuthorsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const authorsHandler = app
  .openapi(postAccountAuthorsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAuthorsAuthorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
