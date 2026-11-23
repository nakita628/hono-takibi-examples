import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateVerifiedAccessGroupRoute,
  postActionCreateVerifiedAccessGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateVerifiedAccessGroupHandler = app
  .openapi(getActionCreateVerifiedAccessGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVerifiedAccessGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
