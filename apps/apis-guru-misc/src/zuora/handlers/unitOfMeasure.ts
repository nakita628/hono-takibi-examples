import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectUnitOfMeasureIdRoute,
  getV1ObjectUnitOfMeasureIdRoute,
  postV1ObjectUnitOfMeasureRoute,
  putV1ObjectUnitOfMeasureIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const unitOfMeasureHandler = app
  .openapi(postV1ObjectUnitOfMeasureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectUnitOfMeasureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectUnitOfMeasureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectUnitOfMeasureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
