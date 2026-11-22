import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionImportStacksToStackSetRoute,
  postActionImportStacksToStackSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionImportStacksToStackSetHandler = app
  .openapi(getActionImportStacksToStackSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionImportStacksToStackSetRoute, (c) => {
    throw new Error('Not implemented')
  })
