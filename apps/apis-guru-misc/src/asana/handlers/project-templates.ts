import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectTemplatesProjectTemplateGidRoute,
  getProjectTemplatesRoute,
  postProjectTemplatesProjectTemplateGidInstantiateProjectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectTemplatesHandler = app
  .openapi(getProjectTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectTemplatesProjectTemplateGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectTemplatesProjectTemplateGidInstantiateProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
