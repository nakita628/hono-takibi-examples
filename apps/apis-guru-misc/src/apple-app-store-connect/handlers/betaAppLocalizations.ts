import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BetaAppLocalizationsIdRoute,
  getV1BetaAppLocalizationsIdAppRoute,
  getV1BetaAppLocalizationsIdRoute,
  getV1BetaAppLocalizationsRoute,
  patchV1BetaAppLocalizationsIdRoute,
  postV1BetaAppLocalizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const betaAppLocalizationsHandler = app
  .openapi(getV1BetaAppLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaAppLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaAppLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BetaAppLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppLocalizationsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
