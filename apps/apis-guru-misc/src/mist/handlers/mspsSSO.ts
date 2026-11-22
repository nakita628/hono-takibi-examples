import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1MspsMspIdSsosSsoIdRoute,
  getApiV1MspsMspIdSsosRoute,
  getApiV1MspsMspIdSsosSsoIdFailuresRoute,
  getApiV1MspsMspIdSsosSsoIdMetadataRoute,
  getApiV1MspsMspIdSsosSsoIdMetadataXmlRoute,
  postApiV1MspsMspIdSsosRoute,
  putApiV1MspsMspIdSsosSsoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mspsSSOHandler = app
  .openapi(getApiV1MspsMspIdSsosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsMspIdSsosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdSsosSsoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdSsosSsoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdSsosSsoIdFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdSsosSsoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdSsosSsoIdMetadataXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
