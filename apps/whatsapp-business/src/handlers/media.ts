import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVersionMediaIDRoute,
  getVersionMediaIDRoute,
  getVersionMediaURLRoute,
  postVersionPhoneNumberIDMediaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(postVersionPhoneNumberIDMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionMediaIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionMediaIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionMediaURLRoute, (c) => {
    throw new Error('Not implemented')
  })
