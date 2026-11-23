import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTagsRoute,
  getTagsSearchTagSearchTermRoute,
  getTagsViewTagIdRoute,
  postTagsAddRoute,
  postTagsDeleteTagIdRoute,
  postTagsEditTagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsViewTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsDeleteTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsEditTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsSearchTagSearchTermRoute, (c) => {
    throw new Error('Not implemented')
  })
