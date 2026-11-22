import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvisioningTemplatesTemplateNameRoute,
  deleteProvisioningTemplatesTemplateNameVersionsVersionIdRoute,
  getProvisioningTemplatesRoute,
  getProvisioningTemplatesTemplateNameRoute,
  getProvisioningTemplatesTemplateNameVersionsRoute,
  getProvisioningTemplatesTemplateNameVersionsVersionIdRoute,
  patchProvisioningTemplatesTemplateNameRoute,
  postProvisioningTemplatesRoute,
  postProvisioningTemplatesTemplateNameProvisioningClaimRoute,
  postProvisioningTemplatesTemplateNameVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const provisioningTemplatesHandler = app
  .openapi(postProvisioningTemplatesTemplateNameProvisioningClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvisioningTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvisioningTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvisioningTemplatesTemplateNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvisioningTemplatesTemplateNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvisioningTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvisioningTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvisioningTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvisioningTemplatesTemplateNameVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvisioningTemplatesTemplateNameVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
