import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2SeatsUsersRoute,
  getApiV2SeatsUsersRoute,
  postApiV2SeatsUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const seatsHandler = app
  .openapi(deleteApiV2SeatsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SeatsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SeatsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
