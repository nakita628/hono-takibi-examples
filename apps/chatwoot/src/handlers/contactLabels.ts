import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AccountsAccountIdContactsIdLabelsRoute,
  postApiV1AccountsAccountIdContactsIdLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactLabelsHandler = app
  .openapi(getApiV1AccountsAccountIdContactsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdContactsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
