import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBusinessEntitiesBusinessEntityIdRoute,
  getBusinessEntitiesRoute,
  getBusinessEntitiesTransfersRoute,
  postBusinessEntitiesBusinessEntityIdRoute,
  postBusinessEntitiesRoute,
  postBusinessEntitiesTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessEntitiesHandler = app
  .openapi(getBusinessEntitiesBusinessEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessEntitiesBusinessEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessEntitiesTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessEntitiesTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
