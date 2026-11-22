import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailTemplatesIdRoute,
  getEmailTemplatesIdRoute,
  getEmailTemplatesRoute,
  patchEmailTemplatesIdRoute,
  postEmailTemplatesIdRenderRoute,
  postEmailTemplatesRoute,
  putEmailTemplatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailTemplatesHandler = app
  .openapi(getEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailTemplatesIdRenderRoute, (c) => {
    throw new Error('Not implemented')
  })
