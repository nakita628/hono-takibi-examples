import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTailnetTailnetAclRoute,
  postTailnetTailnetAclPreviewRoute,
  postTailnetTailnetAclRoute,
  postTailnetTailnetAclValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policyFileHandler = app
  .openapi(getTailnetTailnetAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetAclPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetAclValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
