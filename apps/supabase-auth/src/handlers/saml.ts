import { OpenAPIHono } from '@hono/zod-openapi'
import { getSamlMetadataRoute, postSamlAcsRoute } from '../routes'

const app = new OpenAPIHono()

export const samlHandler = app
  .openapi(getSamlMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSamlAcsRoute, (c) => {
    throw new Error('Not implemented')
  })
