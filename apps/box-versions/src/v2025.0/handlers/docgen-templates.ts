import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocgenTemplatesTemplateIdRoute,
  getDocgenTemplatesRoute,
  getDocgenTemplatesTemplateIdRoute,
  getDocgenTemplatesTemplateIdTagsRoute,
  postDocgenTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const docgenTemplatesHandler = app
  .openapi(postDocgenTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocgenTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocgenTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocgenTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocgenTemplatesTemplateIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
