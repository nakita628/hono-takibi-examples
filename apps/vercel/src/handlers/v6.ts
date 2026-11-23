import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV6DomainsDomainRoute,
  getV6DeploymentsIdFilesRoute,
  getV6DomainsDomainConfigRoute,
  getV6UserTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v6Handler = app
  .openapi(getV6DomainsDomainConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV6DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV6UserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV6DeploymentsIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
