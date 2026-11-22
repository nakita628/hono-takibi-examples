import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateCustomDBEngineVersionRoute,
  postActionCreateCustomDBEngineVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateCustomDBEngineVersionHandler = app
  .openapi(getActionCreateCustomDBEngineVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateCustomDBEngineVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
