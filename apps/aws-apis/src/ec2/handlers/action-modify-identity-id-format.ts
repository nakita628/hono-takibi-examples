import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyIdentityIdFormatRoute,
  postActionModifyIdentityIdFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyIdentityIdFormatHandler = app
  .openapi(getActionModifyIdentityIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyIdentityIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
