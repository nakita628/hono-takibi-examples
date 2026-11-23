import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRidesPagePagePerPagePerPageRoute,
  postRidesPagePagePerPagePerPageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ridesPagePagePerPagePerPageHandler = app
  .openapi(getRidesPagePagePerPagePerPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRidesPagePagePerPagePerPageRoute, (c) => {
    throw new Error('Not implemented')
  })
