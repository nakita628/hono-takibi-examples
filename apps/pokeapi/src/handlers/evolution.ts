import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2EvolutionChainIdIndexRoute,
  getApiV2EvolutionChainIndexRoute,
  getApiV2EvolutionTriggerIdIndexRoute,
  getApiV2EvolutionTriggerIndexRoute,
  getApiV2EvolutionVariableIdIndexRoute,
  getApiV2EvolutionVariableIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const evolutionHandler = app
  .openapi(getApiV2EvolutionChainIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EvolutionChainIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EvolutionTriggerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EvolutionTriggerIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EvolutionVariableIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EvolutionVariableIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
