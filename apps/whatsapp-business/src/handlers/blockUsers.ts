import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVersionPhoneNumberIDBlockUsersRoute,
  getVersionPhoneNumberIDBlockUsersRoute,
  postVersionPhoneNumberIDBlockUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blockUsersHandler = app
  .openapi(getVersionPhoneNumberIDBlockUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDBlockUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionPhoneNumberIDBlockUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
