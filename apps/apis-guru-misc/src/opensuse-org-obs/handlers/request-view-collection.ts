import { OpenAPIHono } from '@hono/zod-openapi'
import { getRequestViewCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const requestViewCollectionHandler = app.openapi(getRequestViewCollectionRoute, (c) => {
  throw new Error('Not implemented')
})
