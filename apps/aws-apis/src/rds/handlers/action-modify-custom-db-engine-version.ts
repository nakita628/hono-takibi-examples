import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyCustomDBEngineVersionRoute,
  postActionModifyCustomDBEngineVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyCustomDbEngineVersionHandler = app
  .openapi(getActionModifyCustomDBEngineVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyCustomDBEngineVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
