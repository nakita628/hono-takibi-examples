import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateManagedPrefixListRoute,
  postActionCreateManagedPrefixListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateManagedPrefixListHandler = app
  .openapi(getActionCreateManagedPrefixListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateManagedPrefixListRoute, (c) => {
    throw new Error('Not implemented')
  })
