import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteLaunchTemplateVersionsRoute,
  postActionDeleteLaunchTemplateVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteLaunchTemplateVersionsHandler = app
  .openapi(getActionDeleteLaunchTemplateVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLaunchTemplateVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
