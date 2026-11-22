import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTemplatesTemplateTypeRoute,
  getTemplatesTemplateTypeSlugRoute,
  postTemplatesTemplateTypeSlugPreviewRoute,
  postTemplatesTemplateTypeSlugRevertRoute,
  postTemplatesTemplateTypeSlugToggleDeliveryRoute,
  putTemplatesTemplateTypeSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailSMSTemplatesHandler = app
  .openapi(getTemplatesTemplateTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateTypeSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplatesTemplateTypeSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateTypeSlugRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateTypeSlugPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateTypeSlugToggleDeliveryRoute, (c) => {
    throw new Error('Not implemented')
  })
