import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectTemplatesProjectTemplateGidRoute,
  getProjectTemplatesProjectTemplateGidRoute,
  getProjectTemplatesRoute,
  postProjectTemplatesProjectTemplateGidInstantiateProjectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectTemplatesHandler = app
  .openapi(getProjectTemplatesProjectTemplateGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectTemplatesProjectTemplateGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectTemplatesProjectTemplateGidInstantiateProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
