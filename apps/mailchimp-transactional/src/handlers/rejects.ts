import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRejectsAddRoute,
  postRejectsAddSmsRoute,
  postRejectsDeleteRoute,
  postRejectsDeleteSmsRoute,
  postRejectsListRoute,
  postRejectsListSmsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rejectsHandler = app
  .openapi(postRejectsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRejectsAddSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRejectsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRejectsListSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRejectsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRejectsDeleteSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
