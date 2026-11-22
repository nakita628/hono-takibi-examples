import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTargetsTargetIdScheduledscansIdIndexRoute,
  getTargetsAllScheduledscansExpandedIndexRoute,
  getTargetsTargetIdScheduledscansExpandedIndexRoute,
  getTargetsTargetIdScheduledscansIdIndexRoute,
  getTargetsTargetIdScheduledscansIndexRoute,
  patchTargetsTargetIdScheduledscansIdIndexRoute,
  postTargetsTargetIdScheduledscansIndexRoute,
  putTargetsTargetIdScheduledscansIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduledHandler = app
  .openapi(getTargetsAllScheduledscansExpandedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScheduledscansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdScheduledscansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScheduledscansExpandedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTargetsTargetIdScheduledscansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdScheduledscansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdScheduledscansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdScheduledscansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
