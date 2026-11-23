import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsMembershipsRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsMembershipsHandler = app.openapi(postCollectionsMembershipsRoute, (c) => {
  throw new Error('Not implemented')
})
