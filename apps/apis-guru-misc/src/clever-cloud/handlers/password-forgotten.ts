import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPasswordForgottenKeyRoute,
  getPasswordForgottenRoute,
  postPasswordForgottenKeyRoute,
  postPasswordForgottenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const passwordForgottenHandler = app
  .openapi(getPasswordForgottenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPasswordForgottenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPasswordForgottenKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPasswordForgottenKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
