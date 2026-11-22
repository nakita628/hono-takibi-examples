import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMimicAccessDelUserRoute,
  getMimicAccessGetAcldbRoute,
  getMimicAccessGetAdmindirRoute,
  getMimicAccessGetAdminuserRoute,
  getMimicAccessGetEnabledRoute,
  getMimicAccessListRoute,
  postMimicAccessAddUserAgentsMaskRoute,
  putMimicAccessLoadFilenameRoute,
  putMimicAccessSaveFilenameRoute,
  putMimicAccessSetAcldbDatabaseNameRoute,
  putMimicAccessSetEnabledEnabledOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessHandler = app
  .openapi(postMimicAccessAddUserAgentsMaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAccessDelUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAccessGetAcldbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAccessGetAdmindirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAccessGetAdminuserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAccessGetEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAccessListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAccessLoadFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAccessSaveFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAccessSetAcldbDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAccessSetEnabledEnabledOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
