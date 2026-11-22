import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteManagedPrefixListRoute,
  postActionDeleteManagedPrefixListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteManagedPrefixListHandler = app
  .openapi(getActionDeleteManagedPrefixListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteManagedPrefixListRoute, (c) => {
    throw new Error('Not implemented')
  })
