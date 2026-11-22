import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PopulationsIdRoute,
  getV1PopulationsIdRoute,
  getV1PopulationsRoute,
  postV1PopulationsRoute,
  putV1PopulationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const populationsHandler = app
  .openapi(getV1PopulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PopulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PopulationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PopulationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PopulationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
