import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteJwtTemplatesTemplateIdRoute,
  getJwtTemplatesRoute,
  getJwtTemplatesTemplateIdRoute,
  patchJwtTemplatesTemplateIdRoute,
  postJwtTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jwtTemplatesHandler = app
  .openapi(getJwtTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJwtTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJwtTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchJwtTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJwtTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
