import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeManagedPrefixListsRoute,
  postActionDescribeManagedPrefixListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeManagedPrefixListsHandler = app
  .openapi(getActionDescribeManagedPrefixListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeManagedPrefixListsRoute, (c) => {
    throw new Error('Not implemented')
  })
