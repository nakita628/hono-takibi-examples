import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsTagIdDatapointsRoute,
  deleteTagsTagIdGroupsRoute,
  deleteTagsTagIdRoute,
  getTagsCountRoute,
  getTagsRoute,
  getTagsTagIdDatapointsCountRoute,
  getTagsTagIdDatapointsRoute,
  getTagsTagIdGroupsCountRoute,
  getTagsTagIdGroupsRoute,
  getTagsTagIdRoute,
  postTagsRoute,
  putTagsTagIdDatapointsPatchRoute,
  putTagsTagIdGroupsPatchRoute,
  putTagsTagIdNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsTagIdDatapointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagIdDatapointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagIdDatapointsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTagsTagIdDatapointsPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsTagIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagIdGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTagsTagIdGroupsPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTagsTagIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
