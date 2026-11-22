import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postKGuestGuestSpaceIdV1TemplateSpaceJsonRoute,
  postKV1TemplateSpaceJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(postKGuestGuestSpaceIdV1TemplateSpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1TemplateSpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
