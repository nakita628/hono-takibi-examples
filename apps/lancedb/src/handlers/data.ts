import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1TableNameDeleteIndexRoute,
  postV1TableNameInsertIndexRoute,
  postV1TableNameMergeInsertIndexRoute,
  postV1TableNameQueryIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataHandler = app
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
