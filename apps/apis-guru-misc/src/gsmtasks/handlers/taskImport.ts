import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTaskImportIdIndexRoute,
  getTaskImportIndexRoute,
  postTaskImportIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskImportHandler = app
  .openapi(getTaskImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaskImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskImportIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
