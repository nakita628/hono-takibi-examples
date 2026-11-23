import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribePlatformVersionRoute,
  postActionDescribePlatformVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribePlatformVersionHandler = app
  .openapi(getActionDescribePlatformVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribePlatformVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
