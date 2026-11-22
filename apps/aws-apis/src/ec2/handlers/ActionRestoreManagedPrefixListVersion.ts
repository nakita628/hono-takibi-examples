import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreManagedPrefixListVersionRoute,
  postActionRestoreManagedPrefixListVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRestoreManagedPrefixListVersionHandler = app
  .openapi(getActionRestoreManagedPrefixListVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreManagedPrefixListVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
