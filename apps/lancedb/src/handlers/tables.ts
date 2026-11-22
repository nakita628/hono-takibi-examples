import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1TableIndexRoute,
  postV1TableNameCreateIndexIndexRoute,
  postV1TableNameCreateIndexRoute,
  postV1TableNameCreateScalarIndexIndexRoute,
  postV1TableNameDescribeIndexRoute,
  postV1TableNameDropIndexRoute,
  postV1TableNameIndexIndexNameDropIndexRoute,
  postV1TableNameIndexListIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tablesHandler = app
  .openapi(getV1TableIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TableNameCreateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TableNameDropIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TableNameDescribeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TableNameIndexListIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TableNameCreateIndexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TableNameCreateScalarIndexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TableNameIndexIndexNameDropIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
