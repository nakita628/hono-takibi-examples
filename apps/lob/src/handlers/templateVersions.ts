import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesTmplIdVersionsVrsnIdRoute,
  getTemplatesTmplIdVersionsRoute,
  getTemplatesTmplIdVersionsVrsnIdRoute,
  postTemplatesTmplIdVersionsRoute,
  postTemplatesTmplIdVersionsVrsnIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateVersionsHandler = app
  .openapi(getTemplatesTmplIdVersionsVrsnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTmplIdVersionsVrsnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplatesTmplIdVersionsVrsnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTmplIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTmplIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
