import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDCardItemIdRoute,
  getUserUserIDCardRoute,
  putUserUserIDCardItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardHandler = app
  .openapi(getUserUserIDCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCardItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDCardItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
