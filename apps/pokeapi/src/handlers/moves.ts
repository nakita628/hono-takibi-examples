import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2MoveAilmentIdIndexRoute,
  getApiV2MoveAilmentIndexRoute,
  getApiV2MoveBattleStyleIdIndexRoute,
  getApiV2MoveBattleStyleIndexRoute,
  getApiV2MoveCategoryIdIndexRoute,
  getApiV2MoveCategoryIndexRoute,
  getApiV2MoveIdIndexRoute,
  getApiV2MoveIndexRoute,
  getApiV2MoveLearnMethodIdIndexRoute,
  getApiV2MoveLearnMethodIndexRoute,
  getApiV2MoveTargetIdIndexRoute,
  getApiV2MoveTargetIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const movesHandler = app
  .openapi(getApiV2MoveIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveAilmentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveAilmentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveBattleStyleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveBattleStyleIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveCategoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveCategoryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveLearnMethodIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveLearnMethodIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveTargetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveTargetIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
