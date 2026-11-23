import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsubConduitsRoute,
  deleteEventsubSubscriptionsRoute,
  getEventsubConduitsRoute,
  getEventsubConduitsShardsRoute,
  getEventsubSubscriptionsRoute,
  patchEventsubConduitsRoute,
  patchEventsubConduitsShardsRoute,
  postEventsubConduitsRoute,
  postEventsubSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsubHandler = app
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
  .openapi(postEventsubSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsubSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsubSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
