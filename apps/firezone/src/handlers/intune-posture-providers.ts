import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIntunePostureProvidersIdRoute,
  getIntunePostureProvidersIdRoute,
  getIntunePostureProvidersRoute,
  patchIntunePostureProvidersIdRoute,
  putIntunePostureProvidersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const intunePostureProvidersHandler = app
  .openapi(deleteIntunePostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntunePostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIntunePostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIntunePostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntunePostureProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
