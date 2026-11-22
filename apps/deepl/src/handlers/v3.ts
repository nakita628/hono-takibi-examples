import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute,
  deleteV3StyleRulesStyleIdRoute,
  getV3StyleRulesRoute,
  getV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute,
  getV3StyleRulesStyleIdRoute,
  patchV3StyleRulesStyleIdRoute,
  postV3StyleRulesRoute,
  postV3StyleRulesStyleIdCustomInstructionsRoute,
  putV3StyleRulesStyleIdConfiguredRulesRoute,
  putV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3StyleRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3StyleRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StyleRulesStyleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3StyleRulesStyleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3StyleRulesStyleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3StyleRulesStyleIdConfiguredRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3StyleRulesStyleIdCustomInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
