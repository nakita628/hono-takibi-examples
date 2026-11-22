import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiConnectionLegalEntitiesIdRoute,
  getApiConnectionLegalEntitiesRoute,
  patchApiConnectionLegalEntitiesIdRoute,
  postApiConnectionLegalEntitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionLegalEntityHandler = app
  .openapi(getApiConnectionLegalEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiConnectionLegalEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConnectionLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiConnectionLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
