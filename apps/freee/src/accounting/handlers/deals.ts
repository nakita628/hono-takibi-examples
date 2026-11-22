import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1DealsIdRoute,
  getApi1DealsIdRoute,
  getApi1DealsRoute,
  postApi1DealsRoute,
  putApi1DealsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dealsHandler = app
  .openapi(getApi1DealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1DealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1DealsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1DealsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1DealsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
