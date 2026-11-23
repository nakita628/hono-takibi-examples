import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVerifiedAccessGroupRoute,
  postActionModifyVerifiedAccessGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyVerifiedAccessGroupHandler = app
  .openapi(getActionModifyVerifiedAccessGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVerifiedAccessGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
