import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountAwsAccountIdRoute,
  getAccountAwsAccountIdRoute,
  postAccountAwsAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(postAccountAwsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountAwsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAwsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
