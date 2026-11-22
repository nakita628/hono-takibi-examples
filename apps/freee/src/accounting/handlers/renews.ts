import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1DealsIdRenewsRenewIdRoute,
  postApi1DealsIdRenewsRoute,
  putApi1DealsIdRenewsRenewIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const renewsHandler = app
  .openapi(postApi1DealsIdRenewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1DealsIdRenewsRenewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1DealsIdRenewsRenewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
