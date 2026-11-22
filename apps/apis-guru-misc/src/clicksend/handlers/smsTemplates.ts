import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSmsTemplatesTemplateIdRoute,
  getSmsTemplatesRoute,
  postSmsTemplatesRoute,
  putSmsTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smsTemplatesHandler = app
  .openapi(getSmsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmsTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
