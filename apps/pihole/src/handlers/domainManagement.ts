import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsTypeKindDomainRoute,
  postDomainsBatchDeleteRoute,
  postDomainsTypeKindRoute,
  putDomainsTypeKindDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainManagementHandler = app
  .openapi(putDomainsTypeKindDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsTypeKindDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsTypeKindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
