import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTagGroupsIdJsonRoute,
  getTagGroupsJsonRoute,
  getTagNameJsonRoute,
  getTagsJsonRoute,
  postTagGroupsJsonRoute,
  putTagGroupsIdJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagGroupsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagGroupsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagGroupsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTagGroupsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagNameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
