import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListVerifiedEmailAddressesRoute,
  postActionListVerifiedEmailAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListVerifiedEmailAddressesHandler = app
  .openapi(getActionListVerifiedEmailAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListVerifiedEmailAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
