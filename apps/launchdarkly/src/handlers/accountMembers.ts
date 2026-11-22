import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2MembersIdRoute,
  getApiV2MembersIdRoute,
  getApiV2MembersRoute,
  patchApiV2MembersIdRoute,
  patchApiV2MembersRoute,
  postApiV2MembersIdTeamsRoute,
  postApiV2MembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountMembersHandler = app
  .openapi(getApiV2MembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2MembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2MembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MembersIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
