import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAsmGroupsGroupIdRoute,
  getAsmGroupsGroupIdRoute,
  getAsmGroupsRoute,
  patchAsmGroupsGroupIdRoute,
  postAsmGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const suppressions__UnsubscribeGroupsHandler = app
  .openapi(getAsmGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAsmGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAsmGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAsmGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAsmGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
