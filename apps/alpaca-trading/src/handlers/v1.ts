import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1LocatesLocateIdRoute,
  getV1LocatesQuotesRoute,
  getV1LocatesRoute,
  postV1LocatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1LocatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LocatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocatesLocateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocatesQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
