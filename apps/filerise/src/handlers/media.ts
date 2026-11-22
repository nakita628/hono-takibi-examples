import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiMediaGetProgressPhpRoute,
  getApiMediaGetViewedMapPhpRoute,
  postApiMediaUpdateProgressPhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(getApiMediaGetProgressPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMediaGetViewedMapPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMediaUpdateProgressPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
