import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSantaPostureProvidersIdRoute,
  getSantaPostureProvidersIdRoute,
  getSantaPostureProvidersRoute,
  patchSantaPostureProvidersIdRoute,
  putSantaPostureProvidersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const santaPostureProvidersHandler = app
  .openapi(getSantaPostureProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSantaPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSantaPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSantaPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSantaPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
