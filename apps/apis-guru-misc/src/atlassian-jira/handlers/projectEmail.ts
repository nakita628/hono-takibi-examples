import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3ProjectProjectIdEmailRoute,
  putRestApi3ProjectProjectIdEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectEmailHandler = app
  .openapi(getRestApi3ProjectProjectIdEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
