import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserTagsTagIdRoute,
  deleteUserTagsTagIdShowsShowIdRoute,
  getUserTagsRoute,
  getUserTagsTagIdShowsRoute,
  patchUserTagsTagIdRoute,
  postUserTagsRoute,
  putUserTagsTagIdShowsShowIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taggedShowsHandler = app
  .openapi(getUserTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTagsTagIdShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserTagsTagIdShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserTagsTagIdShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
