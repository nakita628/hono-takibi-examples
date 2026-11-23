import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMetadataAddRoute,
  postMetadataDeleteRoute,
  postMetadataListRoute,
  postMetadataUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(postMetadataListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
