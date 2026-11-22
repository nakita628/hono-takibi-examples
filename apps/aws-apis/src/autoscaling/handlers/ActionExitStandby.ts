import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionExitStandbyRoute, postActionExitStandbyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionExitStandbyHandler = app
  .openapi(getActionExitStandbyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionExitStandbyRoute, (c) => {
    throw new Error('Not implemented')
  })
