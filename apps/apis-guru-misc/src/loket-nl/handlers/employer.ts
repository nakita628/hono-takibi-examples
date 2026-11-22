import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployerIdLogoRoute,
  getProvidersEmployersEmployerIdLogoRoute,
  getProvidersEmployersEmployerIdLogoVersionRoute,
  getProvidersEmployersEmployerIdProviderlogoRoute,
  getProvidersEmployersEmployerIdProviderlogoVersionRoute,
  getProvidersEmployersEmployerIdRoute,
  getProvidersEmployersMinimizedRoute,
  getProvidersEmployersRoute,
  postProvidersEmployersEmployerIdLogoRoute,
  postProvidersProviderIdEmployersRoute,
  putProvidersEmployersEmployerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employerHandler = app
  .openapi(getProvidersEmployersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersMinimizedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersEmployersEmployerIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdLogoVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdProviderlogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdProviderlogoVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersProviderIdEmployersRoute, (c) => {
    throw new Error('Not implemented')
  })
