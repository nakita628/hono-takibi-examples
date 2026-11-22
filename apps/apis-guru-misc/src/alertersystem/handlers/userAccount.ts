import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiUserAccountIdRoute,
  getApiUserAccountRoute,
  putApiUserAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAccountHandler = app
  .openapi(getApiUserAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
