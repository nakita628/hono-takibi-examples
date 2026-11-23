import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetManagedPrefixListEntriesRoute,
  postActionGetManagedPrefixListEntriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetManagedPrefixListEntriesHandler = app
  .openapi(getActionGetManagedPrefixListEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetManagedPrefixListEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
