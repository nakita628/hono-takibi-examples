import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDirectoriesDirectoryIdGroupsGroupIdRoute,
  getDirectoriesDirectoryIdGroupsRoute,
  getDirectoryGroupsIdRoute,
  getDirectoryGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryGroupsHandler = app
  .openapi(getDirectoriesDirectoryIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoriesDirectoryIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
