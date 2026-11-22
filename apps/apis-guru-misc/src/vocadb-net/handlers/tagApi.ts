import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTagsCommentsCommentIdRoute,
  deleteApiTagsIdRoute,
  getApiTagsByNameNameRoute,
  getApiTagsCategoryNamesRoute,
  getApiTagsIdRoute,
  getApiTagsNamesRoute,
  getApiTagsRoute,
  getApiTagsTagIdChildrenRoute,
  getApiTagsTagIdCommentsRoute,
  getApiTagsTopRoute,
  postApiTagsCommentsCommentIdRoute,
  postApiTagsRoute,
  postApiTagsTagIdCommentsRoute,
  postApiTagsTagIdReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagApiHandler = app
  .openapi(getApiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsCategoryNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTagsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTagsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsTagIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsTagIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTagsTagIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTagsTagIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
