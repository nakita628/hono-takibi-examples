import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postExportsActivityRoute,
  postExportsAllowlistRoute,
  postExportsInfoRoute,
  postExportsListRoute,
  postExportsRejectsRoute,
  postExportsWhitelistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app
  .openapi(postExportsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsRejectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
