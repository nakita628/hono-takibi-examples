import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTokenTokenNumberRoute,
  getTokenRoute,
  getTokenTokenNumberRoute,
  postTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokenHandler = app
  .openapi(getTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTokenTokenNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokenTokenNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
