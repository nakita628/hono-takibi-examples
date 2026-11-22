import { OpenAPIHono } from '@hono/zod-openapi'
import { getV0ResourceNameRoute, postV0SearchAds360FieldsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchAds360FieldsHandler = app
  .openapi(postV0SearchAds360FieldsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0ResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
