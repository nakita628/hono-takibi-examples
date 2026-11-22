import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesTemplateIDRoute,
  getDefaultTemplatesRoute,
  getTemplatesAliasesAliasRoute,
  getTemplatesRoute,
  getTemplatesTemplateIDBuildsBuildIDLogsRoute,
  getTemplatesTemplateIDBuildsBuildIDStatusRoute,
  getTemplatesTemplateIDBuildsRoute,
  getTemplatesTemplateIDFilesHashRoute,
  getTemplatesTemplateIDRoute,
  getV2TemplatesRoute,
  getV2TemplatesTemplateIDRoute,
  patchTemplatesTemplateIDRoute,
  patchV2TemplatesTemplateIDRoute,
  postV2TemplatesTemplateIDBuildsBuildIDRoute,
  postV3TemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(postV3TemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIDFilesHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDefaultTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplatesTemplateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTemplatesTemplateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIDBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TemplatesTemplateIDBuildsBuildIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TemplatesTemplateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2TemplatesTemplateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIDBuildsBuildIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIDBuildsBuildIDLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesAliasesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
