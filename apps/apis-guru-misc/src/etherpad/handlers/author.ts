import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCreateAuthorIfNotExistsForRoute,
  getCreateAuthorRoute,
  getGetAuthorNameRoute,
  getListPadsOfAuthorRoute,
  getListSessionsOfAuthorRoute,
  postCreateAuthorIfNotExistsForRoute,
  postCreateAuthorRoute,
  postGetAuthorNameRoute,
  postListPadsOfAuthorRoute,
  postListSessionsOfAuthorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorHandler = app
  .openapi(getCreateAuthorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateAuthorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreateAuthorIfNotExistsForRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateAuthorIfNotExistsForRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetAuthorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetAuthorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListPadsOfAuthorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListPadsOfAuthorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListSessionsOfAuthorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListSessionsOfAuthorRoute, (c) => {
    throw new Error('Not implemented')
  })
