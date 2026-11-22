import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2GenerationIdIndexRoute,
  getApiV2GenerationIndexRoute,
  getApiV2PokedexIdIndexRoute,
  getApiV2PokedexIndexRoute,
  getApiV2VersionGroupIdIndexRoute,
  getApiV2VersionGroupIndexRoute,
  getApiV2VersionIdIndexRoute,
  getApiV2VersionIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gamesHandler = app
  .openapi(getApiV2GenerationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GenerationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokedexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokedexIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionGroupIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionGroupIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
