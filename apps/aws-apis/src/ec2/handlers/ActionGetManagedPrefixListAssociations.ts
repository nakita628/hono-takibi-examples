import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetManagedPrefixListAssociationsRoute,
  postActionGetManagedPrefixListAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetManagedPrefixListAssociationsHandler = app
  .openapi(getActionGetManagedPrefixListAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetManagedPrefixListAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
