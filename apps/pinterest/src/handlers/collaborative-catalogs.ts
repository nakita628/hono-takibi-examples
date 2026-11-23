import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollaborativeCatalogsRoute } from '../routes'

const app = new OpenAPIHono()

export const collaborativeCatalogsHandler = app.openapi(postCollaborativeCatalogsRoute, (c) => {
  throw new Error('Not implemented')
})
