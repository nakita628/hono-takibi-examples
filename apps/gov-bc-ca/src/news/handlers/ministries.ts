import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiMinistriesKeyMinisterRoute,
  getApiMinistriesKeyRoute,
  getApiMinistriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ministriesHandler = app
  .openapi(getApiMinistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMinistriesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMinistriesKeyMinisterRoute, (c) => {
    throw new Error('Not implemented')
  })
