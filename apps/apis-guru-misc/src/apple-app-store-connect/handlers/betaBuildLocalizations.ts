import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BetaBuildLocalizationsIdRoute,
  getV1BetaBuildLocalizationsIdBuildRoute,
  getV1BetaBuildLocalizationsIdRoute,
  getV1BetaBuildLocalizationsRoute,
  patchV1BetaBuildLocalizationsIdRoute,
  postV1BetaBuildLocalizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const betaBuildLocalizationsHandler = app
  .openapi(getV1BetaBuildLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaBuildLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaBuildLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaBuildLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BetaBuildLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaBuildLocalizationsIdBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
