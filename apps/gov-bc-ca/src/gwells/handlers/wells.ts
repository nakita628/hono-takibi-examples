import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWellsIndexRoute,
  getWellsTagFilesRoute,
  getWellsTagsIndexRoute,
  getWellsWellTagNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wellsHandler = app
  .openapi(getWellsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWellsTagsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWellsTagFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWellsWellTagNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
