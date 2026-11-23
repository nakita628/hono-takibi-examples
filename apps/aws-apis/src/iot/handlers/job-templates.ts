import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteJobTemplatesJobTemplateIdRoute,
  getJobTemplatesJobTemplateIdRoute,
  getJobTemplatesRoute,
  putJobTemplatesJobTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobTemplatesHandler = app
  .openapi(putJobTemplatesJobTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJobTemplatesJobTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobTemplatesJobTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
