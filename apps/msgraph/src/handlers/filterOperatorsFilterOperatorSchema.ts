import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilterOperatorsFilterOperatorSchemaIdRoute,
  getFilterOperatorsCountRoute,
  getFilterOperatorsFilterOperatorSchemaIdRoute,
  getFilterOperatorsRoute,
  patchFilterOperatorsFilterOperatorSchemaIdRoute,
  postFilterOperatorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filterOperatorsFilterOperatorSchemaHandler = app
  .openapi(getFilterOperatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilterOperatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilterOperatorsFilterOperatorSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilterOperatorsFilterOperatorSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilterOperatorsFilterOperatorSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilterOperatorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
