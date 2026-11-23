import { OpenAPIHono } from '@hono/zod-openapi'
import { getListSavedRevisionsRoute, postListSavedRevisionsRoute } from '../routes'

const app = new OpenAPIHono()

export const listSavedRevisionsHandler = app
  .openapi(getListSavedRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListSavedRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
