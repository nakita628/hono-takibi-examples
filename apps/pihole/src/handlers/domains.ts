import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsTypeKindDomainRoute,
  postDomainsTypeKindRoute,
  putDomainsTypeKindDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(putDomainsTypeKindDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsTypeKindDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsTypeKindRoute, (c) => {
    throw new Error('Not implemented')
  })
