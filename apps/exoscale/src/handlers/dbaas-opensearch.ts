import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasOpensearchNameRoute,
  deleteDbaasOpensearchServiceNameUserUsernameRoute,
  getDbaasOpensearchNameAclConfigRoute,
  getDbaasOpensearchNameRoute,
  getDbaasOpensearchServiceNameUserUsernamePasswordRevealRoute,
  postDbaasOpensearchNameRoute,
  postDbaasOpensearchServiceNameUserRoute,
  putDbaasOpensearchNameAclConfigRoute,
  putDbaasOpensearchNameMaintenanceStartRoute,
  putDbaasOpensearchNameRoute,
  putDbaasOpensearchServiceNameUserUsernamePasswordResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasOpensearchHandler = app
  .openapi(getDbaasOpensearchNameAclConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasOpensearchNameAclConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasOpensearchServiceNameUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasOpensearchServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasOpensearchServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasOpensearchNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasOpensearchServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasOpensearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasOpensearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasOpensearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasOpensearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
