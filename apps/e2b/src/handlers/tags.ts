import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesTagsRoute,
  getTemplatesTemplateIDTagsCountRoute,
  getTemplatesTemplateIDTagsExistsRoute,
  getTemplatesTemplateIDTagsGroupsRoute,
  getTemplatesTemplateIDTagsRoute,
  getTemplatesTemplateIDTagsTagAssignmentsRoute,
  postTemplatesTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
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
