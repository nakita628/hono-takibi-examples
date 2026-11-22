import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTailnetTailnetContactsRoute,
  patchTailnetTailnetContactsContactTypeRoute,
  postTailnetTailnetContactsContactTypeResendVerificationEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(getTailnetTailnetContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTailnetTailnetContactsContactTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetContactsContactTypeResendVerificationEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
