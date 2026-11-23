import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteInstanceProfileRoute,
  postActionDeleteInstanceProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteInstanceProfileHandler = app
  .openapi(getActionDeleteInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
