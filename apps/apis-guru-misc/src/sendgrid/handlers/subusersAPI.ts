import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubusersSubuserNameRoute,
  getSubusersReputationsRoute,
  getSubusersRoute,
  patchSubusersSubuserNameRoute,
  postSubusersRoute,
  putSubusersSubuserNameIpsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subusersAPIHandler = app
  .openapi(getSubusersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubusersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubusersReputationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubusersSubuserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubusersSubuserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubusersSubuserNameIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
