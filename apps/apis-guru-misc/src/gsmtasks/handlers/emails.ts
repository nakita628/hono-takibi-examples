import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailsIdIndexRoute,
  getEmailsIdIndexRoute,
  getEmailsIndexRoute,
  patchEmailsIdIndexRoute,
  postEmailsIdResendIndexRoute,
  postEmailsIndexRoute,
  putEmailsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailsHandler = app
  .openapi(getEmailsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailsIdResendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
