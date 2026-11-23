import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesTemplateIdRoute,
  deleteTemplatesTemplateIdVersionsVersionIdRoute,
  getTemplatesRoute,
  getTemplatesTemplateIdRoute,
  getTemplatesTemplateIdVersionsVersionIdRoute,
  patchTemplatesTemplateIdRoute,
  patchTemplatesTemplateIdVersionsVersionIdRoute,
  postTemplatesRoute,
  postTemplatesTemplateIdRoute,
  postTemplatesTemplateIdVersionsRoute,
  postTemplatesTemplateIdVersionsVersionIdActivateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplatesTemplateIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTemplatesTemplateIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdVersionsVersionIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
