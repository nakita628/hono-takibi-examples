import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteCustomDBEngineVersionRoute,
  postActionDeleteCustomDBEngineVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteCustomDBEngineVersionHandler = app
  .openapi(getActionDeleteCustomDBEngineVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteCustomDBEngineVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
