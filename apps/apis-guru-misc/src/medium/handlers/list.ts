import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListListIdArticlesRoute,
  getListListIdResponsesRoute,
  getListListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listHandler = app
  .openapi(getListListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListListIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListListIdResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
