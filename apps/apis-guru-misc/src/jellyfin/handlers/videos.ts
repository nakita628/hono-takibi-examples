import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosItemIdAlternateSourcesRoute,
  getVideosItemIdAdditionalPartsRoute,
  getVideosItemIdStreamContainerRoute,
  getVideosItemIdStreamRoute,
  headVideosItemIdStreamContainerRoute,
  headVideosItemIdStreamRoute,
  postVideosMergeVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app
  .openapi(postVideosMergeVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdAdditionalPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosItemIdAlternateSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headVideosItemIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdStreamContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headVideosItemIdStreamContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
