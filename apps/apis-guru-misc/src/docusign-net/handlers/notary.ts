import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21CurrentUserNotaryRoute,
  postV21CurrentUserNotaryRoute,
  putV21CurrentUserNotaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notaryHandler = app
  .openapi(getV21CurrentUserNotaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21CurrentUserNotaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21CurrentUserNotaryRoute, (c) => {
    throw new Error('Not implemented')
  })
