import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteVerifiedEmailAddressRoute,
  postActionDeleteVerifiedEmailAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteVerifiedEmailAddressHandler = app
  .openapi(getActionDeleteVerifiedEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVerifiedEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
