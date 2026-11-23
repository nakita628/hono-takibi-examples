import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTagsModeratorOnlyRoute,
  getTagsRequiredRoute,
  getTagsRoute,
  getTagsSynonymsRoute,
  getTagsTagsFaqRoute,
  getTagsTagsInfoRoute,
  getTagsTagsRelatedRoute,
  getTagsTagsSynonymsRoute,
  getTagsTagsWikisRoute,
  getTagsTagTopAnswerersPeriodRoute,
  getTagsTagTopAskersPeriodRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsModeratorOnlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsRequiredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsSynonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagsFaqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagsRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagsSynonymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagsWikisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagTopAnswerersPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagTopAskersPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
