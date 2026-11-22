import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegalEntitiesIdRoute,
  getLegalEntitiesIdRoute,
  patchLegalEntitiesIdRoute,
  postLegalEntitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const legalEntitiesHandler = app
  .openapi(postLegalEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
