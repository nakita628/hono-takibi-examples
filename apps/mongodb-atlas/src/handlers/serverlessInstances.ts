import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdServerlessNameRoute,
  getApiAtlasV2GroupsGroupIdServerlessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serverlessInstancesHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdServerlessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdServerlessNameRoute, (c) => {
    throw new Error('Not implemented')
  })
