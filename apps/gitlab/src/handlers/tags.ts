import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdRepositoryTagsTagNameRoute,
  getApiV4ProjectsIdRepositoryTagsRoute,
  getApiV4ProjectsIdRepositoryTagsTagNameRoute,
  getApiV4ProjectsIdRepositoryTagsTagNameSignatureRoute,
  postApiV4ProjectsIdRepositoryTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getApiV4ProjectsIdRepositoryTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositoryTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdRepositoryTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryTagsTagNameSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
