import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteJobtemplatesTemplateIdRoute,
  getJobtemplatesRoute,
  getJobtemplatesTemplateIdRoute,
  postJobtemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobtemplatesHandler = app
  .openapi(postJobtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJobtemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobtemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
