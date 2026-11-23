import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSamlMetadataRoute,
  getSamlSloRoute,
  postSamlAcsRoute,
  postSamlSloRoute,
} from '../routes'

const app = new OpenAPIHono()

export const samlHandler = app
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
