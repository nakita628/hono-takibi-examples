import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1TableIndexRoute,
  postV1TableNameCreateIndexIndexRoute,
  postV1TableNameCreateIndexRoute,
  postV1TableNameCreateScalarIndexIndexRoute,
  postV1TableNameDeleteIndexRoute,
  postV1TableNameDescribeIndexRoute,
  postV1TableNameDropIndexRoute,
  postV1TableNameIndexIndexNameDropIndexRoute,
  postV1TableNameIndexListIndexRoute,
  postV1TableNameInsertIndexRoute,
  postV1TableNameMergeInsertIndexRoute,
  postV1TableNameQueryIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1TableIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TableNameCreateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TableNameQueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TableNameInsertIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TableNameMergeInsertIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TableNameDeleteIndexRoute, (c) => {
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
