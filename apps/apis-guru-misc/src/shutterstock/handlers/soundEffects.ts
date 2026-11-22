import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2SfxIdRoute,
  getV2SfxLicensesRoute,
  getV2SfxRoute,
  getV2SfxSearchRoute,
  postV2SfxLicensesIdDownloadsRoute,
  postV2SfxLicensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const soundEffectsHandler = app
  .openapi(getV2SfxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SfxLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SfxLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SfxLicensesIdDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SfxSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SfxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
