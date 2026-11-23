import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTemplatesSensitivityInspectionsIdRoute,
  getTemplatesSensitivityInspectionsRoute,
  putTemplatesSensitivityInspectionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplatesSensitivityInspectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplatesSensitivityInspectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesSensitivityInspectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
