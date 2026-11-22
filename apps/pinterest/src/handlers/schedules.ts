import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdSchedulesRoute,
  patchAdAccountsAdAccountIdSchedulesRoute,
  postAdAccountsAdAccountIdSchedulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulesHandler = app
  .openapi(getAdAccountsAdAccountIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
