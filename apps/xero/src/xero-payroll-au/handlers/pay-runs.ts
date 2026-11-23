import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPayRunsPayRunIDRoute,
  getPayRunsRoute,
  postPayRunsPayRunIDRoute,
  postPayRunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payRunsHandler = app
  .openapi(getPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayRunsPayRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayRunsPayRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
