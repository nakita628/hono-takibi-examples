import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmailHardBouncesRoute, getEmailUnsubscribesRoute } from '../routes'

const app = new OpenAPIHono()

export const emailListsAddressesHandler = app
  .openapi(getEmailHardBouncesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailUnsubscribesRoute, (c) => {
    throw new Error('Not implemented')
  })
