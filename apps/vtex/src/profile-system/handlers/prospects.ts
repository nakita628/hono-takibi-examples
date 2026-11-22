import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiStorageProfileSystemProspectsProspectIdRoute,
  getApiStorageProfileSystemProspectsProspectIdRoute,
  getApiStorageProfileSystemProspectsProspectIdUnmaskRoute,
  patchApiStorageProfileSystemProspectsProspectIdRoute,
  postApiStorageProfileSystemProspectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prospectsHandler = app
  .openapi(postApiStorageProfileSystemProspectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiStorageProfileSystemProspectsProspectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProspectsProspectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiStorageProfileSystemProspectsProspectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStorageProfileSystemProspectsProspectIdUnmaskRoute, (c) => {
    throw new Error('Not implemented')
  })
