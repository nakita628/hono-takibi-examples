import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdAwsCustomDNSRoute,
  patchApiAtlasV2GroupsGroupIdAwsCustomDNSRoute,
} from '../routes'

const app = new OpenAPIHono()

export const awsClustersDNSHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdAwsCustomDNSRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdAwsCustomDNSRoute, (c) => {
    throw new Error('Not implemented')
  })
