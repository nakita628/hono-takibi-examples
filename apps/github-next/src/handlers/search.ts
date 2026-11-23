import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchCodeRoute,
  getSearchCommitsRoute,
  getSearchIssuesRoute,
  getSearchLabelsRoute,
  getSearchRepositoriesRoute,
  getSearchTopicsRoute,
  getSearchUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
