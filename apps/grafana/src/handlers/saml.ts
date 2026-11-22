import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLogoutSamlRoute,
  getSamlMetadataRoute,
  getSamlSloRoute,
  postSamlAcsRoute,
  postSamlSloRoute,
} from '../routes'

const app = new OpenAPIHono()

export const samlHandler = app
  .openapi(getLogoutSamlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSamlAcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSamlMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSamlSloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSamlSloRoute, (c) => {
    throw new Error('Not implemented')
  })
