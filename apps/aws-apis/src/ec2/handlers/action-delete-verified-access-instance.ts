import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteVerifiedAccessInstanceRoute,
  postActionDeleteVerifiedAccessInstanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteVerifiedAccessInstanceHandler = app
  .openapi(getActionDeleteVerifiedAccessInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVerifiedAccessInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
