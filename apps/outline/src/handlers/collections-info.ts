import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsInfoHandler = app.openapi(postCollectionsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
