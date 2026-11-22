import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProviderProviderResourceNameIdRoute,
  getProviderProviderResourceNameIdRoute,
  getProviderProviderResourceNameRoute,
  patchProviderProviderResourceNameIdRoute,
  postProviderProviderResourceNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const providerResourcesHandler = app
  .openapi(postProviderProviderResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProviderProviderResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProviderProviderResourceNameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProviderProviderResourceNameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProviderProviderResourceNameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
