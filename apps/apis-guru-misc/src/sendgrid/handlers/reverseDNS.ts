import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWhitelabelIpsIdRoute,
  getWhitelabelIpsIdRoute,
  getWhitelabelIpsRoute,
  postWhitelabelIpsIdValidateRoute,
  postWhitelabelIpsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reverseDNSHandler = app
  .openapi(getWhitelabelIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhitelabelIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhitelabelIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelIpsIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
