import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTemplatesRoute,
  getTemplatesTemplateIdFullTrueRoute,
  getTemplatesTemplateIdRoute,
  getTemplatesTemplateIdSchemaRoute,
  getTemplatesTemplateIdSubmissionsRoute,
  postTemplatesRoute,
  postTemplatesTemplateIdCopyRoute,
  postTemplatesTemplateIdMoveRoute,
  postTemplatesTemplateIdSubmissionsBatchRoute,
  postTemplatesTemplateIdSubmissionsRoute,
  putTemplatesTemplateIdAddFieldsRoute,
  putTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplatesTemplateIdAddFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIdSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdSubmissionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIdFullTrueRoute, (c) => {
    throw new Error('Not implemented')
  })
