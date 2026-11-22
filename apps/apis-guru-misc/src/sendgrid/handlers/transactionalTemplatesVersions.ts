import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesTemplateIdVersionsVersionIdRoute,
  getTemplatesTemplateIdVersionsVersionIdRoute,
  patchTemplatesTemplateIdVersionsVersionIdRoute,
  postTemplatesTemplateIdVersionsRoute,
  postTemplatesTemplateIdVersionsVersionIdActivateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionalTemplatesVersionsHandler = app
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
