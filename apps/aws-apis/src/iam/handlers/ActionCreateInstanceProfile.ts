import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateInstanceProfileRoute,
  postActionCreateInstanceProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateInstanceProfileHandler = app
  .openapi(getActionCreateInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
