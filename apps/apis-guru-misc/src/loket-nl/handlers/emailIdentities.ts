import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmailidentitiesEmailIdentityIdRoute,
  deleteProvidersEmployersEmailidentitiesEmailIdentityIdRoute,
  getProvidersEmployersEmployerIdEmailidentitiesRoute,
  getProvidersProviderIdEmailidentitiesRoute,
  postProvidersEmailidentitiesEmailIdentityIdSendtestemailRoute,
  postProvidersEmployersEmailidentitiesEmailIdentityIdSendtestemailRoute,
  postProvidersEmployersEmployerIdEmailidentitiesRoute,
  postProvidersEmployersEmployerIdEmailidentitiesVerifyRoute,
  postProvidersProviderIdEmailidentitiesRoute,
  postProvidersProviderIdEmailidentitiesVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailIdentitiesHandler = app
  .openapi(deleteProvidersEmailidentitiesEmailIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmailidentitiesEmailIdentityIdSendtestemailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersEmployersEmailidentitiesEmailIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmailidentitiesEmailIdentityIdSendtestemailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmailidentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdEmailidentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdEmailidentitiesVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdEmailidentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersProviderIdEmailidentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersProviderIdEmailidentitiesVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
