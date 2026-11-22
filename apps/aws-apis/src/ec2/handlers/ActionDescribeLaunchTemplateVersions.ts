import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLaunchTemplateVersionsRoute,
  postActionDescribeLaunchTemplateVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeLaunchTemplateVersionsHandler = app
  .openapi(getActionDescribeLaunchTemplateVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLaunchTemplateVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
