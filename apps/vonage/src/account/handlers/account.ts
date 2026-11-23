import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountGetBalanceRoute,
  postAccountRegisterSenderRoute,
  postAccountSettingsRoute,
  postAccountTopUpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getAccountGetBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRegisterSenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountTopUpRoute, (c) => {
    throw new Error('Not implemented')
  })
