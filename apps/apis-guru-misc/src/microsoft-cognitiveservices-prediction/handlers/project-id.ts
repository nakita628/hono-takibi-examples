import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postProjectIdClassifyIterationsPublishedNameImageNostoreRoute,
  postProjectIdClassifyIterationsPublishedNameImageRoute,
  postProjectIdClassifyIterationsPublishedNameUrlNostoreRoute,
  postProjectIdClassifyIterationsPublishedNameUrlRoute,
  postProjectIdDetectIterationsPublishedNameImageNostoreRoute,
  postProjectIdDetectIterationsPublishedNameImageRoute,
  postProjectIdDetectIterationsPublishedNameUrlNostoreRoute,
  postProjectIdDetectIterationsPublishedNameUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectIdHandler = app
  .openapi(postProjectIdClassifyIterationsPublishedNameImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectIdClassifyIterationsPublishedNameImageNostoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectIdClassifyIterationsPublishedNameUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectIdClassifyIterationsPublishedNameUrlNostoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectIdDetectIterationsPublishedNameImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectIdDetectIterationsPublishedNameImageNostoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectIdDetectIterationsPublishedNameUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectIdDetectIterationsPublishedNameUrlNostoreRoute, (c) => {
    throw new Error('Not implemented')
  })
