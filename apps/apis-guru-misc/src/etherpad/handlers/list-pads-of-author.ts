import { OpenAPIHono } from '@hono/zod-openapi'
import { getListPadsOfAuthorRoute, postListPadsOfAuthorRoute } from '../routes'

const app = new OpenAPIHono()

export const listPadsOfAuthorHandler = app
  .openapi(getListPadsOfAuthorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListPadsOfAuthorRoute, (c) => {
    throw new Error('Not implemented')
  })
