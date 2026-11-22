import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdTagsTagIdRoute,
  getProjectsProjectIdTagsRoute,
  getProjectsProjectIdTagsTagIdRoute,
  patchProjectsProjectIdTagsTagIdRoute,
  postProjectsProjectIdTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsApiHandler = app
  .openapi(getProjectsProjectIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
