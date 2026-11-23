import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRacConnectionTokensConnectionTokenUuidIndexRoute,
  getRacConnectionTokensConnectionTokenUuidIndexRoute,
  getRacConnectionTokensConnectionTokenUuidUsedByIndexRoute,
  getRacConnectionTokensIndexRoute,
  getRacDevicesIndexRoute,
  patchRacConnectionTokensConnectionTokenUuidIndexRoute,
  putRacConnectionTokensConnectionTokenUuidIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const racHandler = app
  .openapi(getRacConnectionTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRacConnectionTokensConnectionTokenUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRacConnectionTokensConnectionTokenUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRacConnectionTokensConnectionTokenUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRacConnectionTokensConnectionTokenUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRacConnectionTokensConnectionTokenUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRacDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
