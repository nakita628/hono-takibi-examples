import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppInfoLocalizationsIdRoute,
  getV1AppInfoLocalizationsIdRoute,
  patchV1AppInfoLocalizationsIdRoute,
  postV1AppInfoLocalizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appInfoLocalizationsHandler = app
  .openapi(postV1AppInfoLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppInfoLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppInfoLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppInfoLocalizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
