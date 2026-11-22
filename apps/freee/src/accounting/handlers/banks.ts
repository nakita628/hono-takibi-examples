import { OpenAPIHono } from '@hono/zod-openapi'
import { getApi1BanksIdRoute, getApi1BanksRoute } from '../routes'

const app = new OpenAPIHono()

export const banksHandler = app
  .openapi(getApi1BanksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1BanksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
