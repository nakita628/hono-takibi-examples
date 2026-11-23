import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesTmplIdRoute,
  deleteTemplatesTmplIdVersionsVrsnIdRoute,
  getTemplatesRoute,
  getTemplatesTmplIdRoute,
  getTemplatesTmplIdVersionsRoute,
  getTemplatesTmplIdVersionsVrsnIdRoute,
  postTemplatesRoute,
  postTemplatesTmplIdRoute,
  postTemplatesTmplIdVersionsRoute,
  postTemplatesTmplIdVersionsVrsnIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
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
  .openapi(getTemplatesTmplIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTmplIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplatesTmplIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
