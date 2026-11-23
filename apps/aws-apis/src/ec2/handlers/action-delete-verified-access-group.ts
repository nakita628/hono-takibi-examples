import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteVerifiedAccessGroupRoute,
  postActionDeleteVerifiedAccessGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteVerifiedAccessGroupHandler = app
  .openapi(getActionDeleteVerifiedAccessGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVerifiedAccessGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
