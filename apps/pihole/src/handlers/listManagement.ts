import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteListsListRoute,
  getListsListRoute,
  getListsRoute,
  getSearchDomainRoute,
  postListsBatchDeleteRoute,
  postListsRoute,
  putListsListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listManagementHandler = app
  .openapi(getListsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteListsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
