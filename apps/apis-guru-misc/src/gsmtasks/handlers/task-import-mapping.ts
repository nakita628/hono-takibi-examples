import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTaskImportMappingIdIndexRoute,
  getTaskImportMappingIndexRoute,
  postTaskImportMappingIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskImportMappingHandler = app
  .openapi(getTaskImportMappingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaskImportMappingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskImportMappingIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
