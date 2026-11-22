import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute,
  deleteAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute,
  deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute,
  deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute,
  deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute,
  deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientAvailableRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientCompositeRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsRealmAvailableRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsRealmCompositeRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientAvailableRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientCompositeRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmAvailableRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmCompositeRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientAvailableRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientCompositeRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmAvailableRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmCompositeRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRoute,
  postAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute,
  postAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute,
  postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute,
  postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute,
  postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute,
  postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scopeMappingsHandler = app
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientAvailableRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientCompositeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientAvailableRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientCompositeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
