import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ContestEffectIdIndexRoute,
  getApiV2ContestEffectIndexRoute,
  getApiV2ContestTypeIdIndexRoute,
  getApiV2ContestTypeIndexRoute,
  getApiV2SuperContestEffectIdIndexRoute,
  getApiV2SuperContestEffectIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contestsHandler = app
  .openapi(getApiV2ContestTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContestTypeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContestEffectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContestEffectIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SuperContestEffectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SuperContestEffectIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
