import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreateAuthorIfNotExistsForRoute, postCreateAuthorIfNotExistsForRoute } from '../routes'

const app = new OpenAPIHono()

export const createAuthorIfNotExistsForHandler = app
  .openapi(getCreateAuthorIfNotExistsForRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateAuthorIfNotExistsForRoute, (c) => {
    throw new Error('Not implemented')
  })
