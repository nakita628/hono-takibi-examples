import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLaunchTemplatesRoute,
  postActionDescribeLaunchTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeLaunchTemplatesHandler = app
  .openapi(getActionDescribeLaunchTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLaunchTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
