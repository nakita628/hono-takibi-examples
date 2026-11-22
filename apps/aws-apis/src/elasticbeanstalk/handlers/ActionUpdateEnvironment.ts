import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateEnvironmentRoute, postActionUpdateEnvironmentRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateEnvironmentHandler = app
  .openapi(getActionUpdateEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
