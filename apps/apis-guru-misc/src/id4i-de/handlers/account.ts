import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccountPasswordRoute,
  postAccountRegistrationRoute,
  postAccountVerificationRoute,
  putAccountPasswordRoute,
  putAccountRegistrationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(postAccountPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
