import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionEnterStandbyRoute, postActionEnterStandbyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionEnterStandbyHandler = app
  .openapi(getActionEnterStandbyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnterStandbyRoute, (c) => {
    throw new Error('Not implemented')
  })
