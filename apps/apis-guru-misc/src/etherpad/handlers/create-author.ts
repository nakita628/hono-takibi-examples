import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreateAuthorRoute, postCreateAuthorRoute } from '../routes'

const app = new OpenAPIHono()

export const createAuthorHandler = app
  .openapi(getCreateAuthorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateAuthorRoute, (c) => {
    throw new Error('Not implemented')
  })
