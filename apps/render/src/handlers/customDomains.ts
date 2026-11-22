import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute,
  getServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute,
  getServicesServiceIdCustomDomainsRoute,
  postServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyRoute,
  postServicesServiceIdCustomDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customDomainsHandler = app
  .openapi(getServicesServiceIdCustomDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdCustomDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
