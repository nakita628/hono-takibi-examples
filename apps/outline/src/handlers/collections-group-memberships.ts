import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsGroupMembershipsRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsGroupMembershipsHandler = app.openapi(
  postCollectionsGroupMembershipsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
