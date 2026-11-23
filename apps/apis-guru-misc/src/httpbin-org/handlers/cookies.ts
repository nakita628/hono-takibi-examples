import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCookiesDeleteRoute,
  getCookiesRoute,
  getCookiesSetNameValueRoute,
  getCookiesSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cookiesHandler = app
  .openapi(getCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCookiesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCookiesSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCookiesSetNameValueRoute, (c) => {
    throw new Error('Not implemented')
  })
