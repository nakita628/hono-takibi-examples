import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateLaunchTemplateVersionRoute,
  postActionCreateLaunchTemplateVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateLaunchTemplateVersionHandler = app
  .openapi(getActionCreateLaunchTemplateVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateLaunchTemplateVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
