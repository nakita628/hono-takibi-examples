import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2DomainSettingsRoute,
  getV2DomainTemplatesProvidersProviderServicesServiceRoute,
  getV2ProvconfProviderServiceAccountRoute,
  postV1VerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postV1VerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DomainTemplatesProvidersProviderServicesServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProvconfProviderServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DomainSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
