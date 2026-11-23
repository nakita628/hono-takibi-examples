import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeFastLaunchImagesRoute,
  postActionDescribeFastLaunchImagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeFastLaunchImagesHandler = app
  .openapi(getActionDescribeFastLaunchImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeFastLaunchImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
