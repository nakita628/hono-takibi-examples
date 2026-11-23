import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserContentByDateJsonRoute,
  getUserContentRecentJsonRoute,
  getUserContentUrlJsonRoute,
  getUserContentUserJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userContentHandler = app
  .openapi(getUserContentByDateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserContentRecentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserContentUrlJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserContentUserJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
