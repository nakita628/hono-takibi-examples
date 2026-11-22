import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateVerifiedAccessInstanceRoute,
  postActionCreateVerifiedAccessInstanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateVerifiedAccessInstanceHandler = app
  .openapi(getActionCreateVerifiedAccessInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVerifiedAccessInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
