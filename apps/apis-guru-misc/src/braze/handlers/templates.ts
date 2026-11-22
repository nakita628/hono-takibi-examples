import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContentBlocksInfoRoute,
  getContentBlocksListRoute,
  getTemplatesEmailInfoRoute,
  getTemplatesEmailListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getContentBlocksInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentBlocksListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesEmailInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesEmailListRoute, (c) => {
    throw new Error('Not implemented')
  })
