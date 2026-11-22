import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSettingsApplicationMediaProvidersProviderNameRoute,
  deleteSettingsApplicationRoute,
  getSettingsApplicationMediaProvidersRoute,
  getSettingsApplicationRoute,
  patchSettingsApplicationRoute,
  postAccountShardsRoute,
  postSettingsApplicationMediaProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationHandler = app
  .openapi(postAccountShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsApplicationMediaProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsApplicationMediaProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsApplicationMediaProvidersProviderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
