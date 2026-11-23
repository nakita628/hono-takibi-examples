import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransitionsTransitionIdRoute,
  getTransitionsRoute,
  getTransitionsTransitionIdExecutionsExecutionIdRoute,
  getTransitionsTransitionIdExecutionsRoute,
  getTransitionsTransitionIdRoute,
  optionsTransitionsRoute,
  optionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRoute,
  optionsTransitionsTransitionIdExecutionsExecutionIdRoute,
  optionsTransitionsTransitionIdExecutionsRoute,
  optionsTransitionsTransitionIdRoute,
  patchTransitionsTransitionIdExecutionsExecutionIdRoute,
  patchTransitionsTransitionIdRoute,
  postTransitionsRoute,
  postTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRoute,
  postTransitionsTransitionIdExecutionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transitionsHandler = app
  .openapi(getTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransitionsTransitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitionsTransitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsTransitionsTransitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTransitionsTransitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitionsTransitionIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsTransitionsTransitionIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitionsTransitionIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitionsTransitionIdExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsTransitionsTransitionIdExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTransitionsTransitionIdExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransitionsTransitionIdExecutionsExecutionIdHeartbeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
