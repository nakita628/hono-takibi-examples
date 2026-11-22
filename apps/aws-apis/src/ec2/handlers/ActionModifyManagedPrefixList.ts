import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyManagedPrefixListRoute,
  postActionModifyManagedPrefixListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyManagedPrefixListHandler = app
  .openapi(getActionModifyManagedPrefixListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyManagedPrefixListRoute, (c) => {
    throw new Error('Not implemented')
  })
