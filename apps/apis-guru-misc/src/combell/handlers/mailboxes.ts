import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMailboxesMailboxNameRoute,
  getMailboxesMailboxNameRoute,
  getMailboxesRoute,
  postMailboxesRoute,
  putMailboxesMailboxNameAutoforwardRoute,
  putMailboxesMailboxNameAutoreplyRoute,
  putMailboxesMailboxNamePasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mailboxesHandler = app
  .openapi(getMailboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMailboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMailboxesMailboxNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMailboxesMailboxNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMailboxesMailboxNameAutoforwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMailboxesMailboxNameAutoreplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMailboxesMailboxNamePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
