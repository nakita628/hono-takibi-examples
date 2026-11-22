import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocgenTemplatesTemplateIdRoute,
  getDocgenTemplateJobsTemplateIdRoute,
  getDocgenTemplatesRoute,
  getDocgenTemplatesTemplateIdRoute,
  getDocgenTemplatesTemplateIdTagsRoute,
  postDocgenTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boxDocGenTemplatesHandler = app
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
  .openapi(getDocgenTemplateJobsTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
