import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIruPostureProvidersIdRoute,
  getIruPostureProvidersIdRoute,
  getIruPostureProvidersRoute,
  patchIruPostureProvidersIdRoute,
  putIruPostureProvidersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const iruPostureProvidersHandler = app
  .openapi(deleteIruPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIruPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIruPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIruPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIruPostureProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
