import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiLegalEntitiesIdRoute,
  getApiLegalEntitiesRoute,
  patchApiLegalEntitiesIdRoute,
  patchApiSimulationsLegalEntitiesIdUpdateStatusRoute,
  postApiLegalEntitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const legalEntityHandler = app
  .openapi(getApiLegalEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLegalEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSimulationsLegalEntitiesIdUpdateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
