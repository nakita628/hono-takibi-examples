import { OpenAPIHono } from '@hono/zod-openapi'
import { getStaffRoute, getStaffSearchRoute, postStaffSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const staffHandler = app
  .openapi(getStaffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStaffSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStaffSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
