import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVerifiedAccessInstanceRoute,
  postActionModifyVerifiedAccessInstanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyVerifiedAccessInstanceHandler = app
  .openapi(getActionModifyVerifiedAccessInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVerifiedAccessInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
