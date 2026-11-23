import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEvalsEvalIdRoute,
  deleteEvalsEvalIdRunsRunIdRoute,
  getEvalsEvalIdRoute,
  getEvalsEvalIdRunsRoute,
  getEvalsEvalIdRunsRunIdOutputItemsOutputItemIdRoute,
  getEvalsEvalIdRunsRunIdOutputItemsRoute,
  getEvalsEvalIdRunsRunIdRoute,
  getEvalsRoute,
  postEvalsEvalIdRoute,
  postEvalsEvalIdRunsRoute,
  postEvalsEvalIdRunsRunIdCancelRoute,
  postEvalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const evalsHandler = app
  .openapi(getEvalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEvalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalsEvalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEvalsEvalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEvalsEvalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalsEvalIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEvalsEvalIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalsEvalIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEvalsEvalIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEvalsEvalIdRunsRunIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalsEvalIdRunsRunIdOutputItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalsEvalIdRunsRunIdOutputItemsOutputItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
