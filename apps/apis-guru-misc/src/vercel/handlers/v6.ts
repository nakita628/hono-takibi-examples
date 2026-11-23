import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV6DomainsDomainRoute,
  getV6DeploymentsIdFilesFileIdRoute,
  getV6DeploymentsIdFilesRoute,
  getV6DeploymentsRoute,
  getV6DomainsDomainConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v6Handler = app
  .openapi(getV6DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV6DeploymentsIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV6DeploymentsIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV6DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV6DomainsDomainConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
