import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsubConduitsRoute,
  getEventsubConduitsRoute,
  getEventsubConduitsShardsRoute,
  patchEventsubConduitsRoute,
  patchEventsubConduitsShardsRoute,
  postEventsubConduitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conduitsHandler = app
  .openapi(getEventsubConduitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsubConduitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventsubConduitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsubConduitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsubConduitsShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventsubConduitsShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
