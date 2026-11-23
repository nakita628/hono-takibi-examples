import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsGroupMembershipsRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsGroupMembershipsHandler = app.openapi(
  postDocumentsGroupMembershipsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
