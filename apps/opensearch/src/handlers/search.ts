import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSearchPipelineIdRoute,
  deleteSearchPointInTimeAllRoute,
  deleteSearchPointInTimeRoute,
  deleteSearchScrollRoute,
  deleteSearchScrollScrollIdRoute,
  getSearchPipelineIdRoute,
  getSearchPipelineRoute,
  getSearchPointInTimeAllRoute,
  getSearchRoute,
  getSearchScrollRoute,
  getSearchScrollScrollIdRoute,
  getSearchTemplateRoute,
  postSearchRoute,
  postSearchScrollRoute,
  postSearchScrollScrollIdRoute,
  postSearchTemplateRoute,
  putSearchPipelineIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSearchPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSearchPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSearchPointInTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSearchPointInTimeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchPointInTimeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSearchScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSearchScrollScrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchScrollScrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchScrollScrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
