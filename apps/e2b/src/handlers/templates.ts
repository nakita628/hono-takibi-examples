import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesTagsRoute,
  deleteTemplatesTemplateIDRoute,
  getTemplatesAliasesAliasRoute,
  getTemplatesRoute,
  getTemplatesTemplateIDBuildsBuildIDLogsRoute,
  getTemplatesTemplateIDBuildsBuildIDStatusRoute,
  getTemplatesTemplateIDBuildsRoute,
  getTemplatesTemplateIDFilesHashRoute,
  getTemplatesTemplateIDRoute,
  getTemplatesTemplateIDTagsCountRoute,
  getTemplatesTemplateIDTagsExistsRoute,
  getTemplatesTemplateIDTagsGroupsRoute,
  getTemplatesTemplateIDTagsRoute,
  getTemplatesTemplateIDTagsTagAssignmentsRoute,
  patchTemplatesTemplateIDRoute,
  postTemplatesTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplatesTemplateIDFilesHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesRoute, (c) => {
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
  .openapi(getTemplatesTemplateIDBuildsBuildIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIDBuildsBuildIDLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplatesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIDTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIDTagsGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIDTagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIDTagsExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIDTagsTagAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesAliasesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
