import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdWikisSlugRoute,
  deleteApiV4ProjectsIdWikisSlugRoute,
  getApiV4GroupsIdWikisRoute,
  getApiV4GroupsIdWikisSlugRoute,
  getApiV4ProjectsIdWikisRoute,
  getApiV4ProjectsIdWikisSlugRoute,
  postApiV4GroupsIdWikisAttachmentsRoute,
  postApiV4GroupsIdWikisRoute,
  postApiV4ProjectsIdWikisAttachmentsRoute,
  postApiV4ProjectsIdWikisRoute,
  putApiV4GroupsIdWikisSlugRoute,
  putApiV4ProjectsIdWikisSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wikisHandler = app
  .openapi(getApiV4GroupsIdWikisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdWikisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdWikisSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdWikisSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdWikisSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdWikisAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdWikisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdWikisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdWikisSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdWikisSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdWikisSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdWikisAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
