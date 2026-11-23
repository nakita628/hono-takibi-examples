import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatus204Route, getStatus302Route } from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app
  .openapi(getStatus302Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus204Route, (c) => {
    throw new Error('Not implemented')
  })
