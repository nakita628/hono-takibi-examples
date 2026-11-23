import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExportsIdIndexRoute,
  getExportsIdIndexRoute,
  getExportsIndexRoute,
  patchExportsIdIndexRoute,
  postExportsIndexRoute,
  putExportsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app
  .openapi(getExportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExportsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExportsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExportsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
