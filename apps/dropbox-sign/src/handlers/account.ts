import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountRoute,
  getAccountSettingsRoute,
  postAccountCreateRoute,
  postAccountSettingsRoute,
  postAccountVerifyRoute,
  putAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(postAccountCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
