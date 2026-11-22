import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1PrivateLinkCreateRoute,
  postV1PrivateLinkDeleteRoute,
  postV1PrivateLinkGetRoute,
  postV1PrivateLinkListByStatusRoute,
  postV1PrivateLinkListRoute,
  postV1PrivateLinkUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const privateLinkHandler = app
  .openapi(postV1PrivateLinkCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLinkListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLinkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLinkGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLinkUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLinkListByStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
