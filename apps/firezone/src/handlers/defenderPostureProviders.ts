import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDefenderPostureProvidersIdRoute,
  getDefenderPostureProvidersIdRoute,
  getDefenderPostureProvidersRoute,
  patchDefenderPostureProvidersIdRoute,
  putDefenderPostureProvidersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const defenderPostureProvidersHandler = app
  .openapi(deleteDefenderPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDefenderPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDefenderPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDefenderPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDefenderPostureProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
