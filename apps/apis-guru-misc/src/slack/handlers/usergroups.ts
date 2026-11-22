import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsergroupsListRoute,
  postUsergroupsCreateRoute,
  postUsergroupsDisableRoute,
  postUsergroupsEnableRoute,
  postUsergroupsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usergroupsHandler = app
  .openapi(postUsergroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsergroupsDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsergroupsEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsergroupsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsergroupsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
