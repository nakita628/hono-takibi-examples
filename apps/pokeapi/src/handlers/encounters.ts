import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2EncounterConditionIdIndexRoute,
  getApiV2EncounterConditionIndexRoute,
  getApiV2EncounterConditionValueIdIndexRoute,
  getApiV2EncounterConditionValueIndexRoute,
  getApiV2EncounterMethodIdIndexRoute,
  getApiV2EncounterMethodIndexRoute,
  getApiV2PokemonPokemonIdEncountersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const encountersHandler = app
  .openapi(getApiV2EncounterMethodIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EncounterMethodIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EncounterConditionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EncounterConditionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EncounterConditionValueIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EncounterConditionValueIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonPokemonIdEncountersRoute, (c) => {
    throw new Error('Not implemented')
  })
