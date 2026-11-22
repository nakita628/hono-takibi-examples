import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetLaunchTemplateDataRoute,
  postActionGetLaunchTemplateDataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetLaunchTemplateDataHandler = app
  .openapi(getActionGetLaunchTemplateDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetLaunchTemplateDataRoute, (c) => {
    throw new Error('Not implemented')
  })
