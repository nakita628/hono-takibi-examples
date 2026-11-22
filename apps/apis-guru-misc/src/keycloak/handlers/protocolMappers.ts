import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmClientScopesId1ProtocolMappersModelsId2Route,
  deleteRealmClientsId1ProtocolMappersModelsId2Route,
  getRealmClientScopesId1ProtocolMappersModelsId2Route,
  getRealmClientScopesIdProtocolMappersModelsRoute,
  getRealmClientScopesIdProtocolMappersProtocolProtocolRoute,
  getRealmClientsId1ProtocolMappersModelsId2Route,
  getRealmClientsIdProtocolMappersModelsRoute,
  getRealmClientsIdProtocolMappersProtocolProtocolRoute,
  postRealmClientScopesIdProtocolMappersAddModelsRoute,
  postRealmClientScopesIdProtocolMappersModelsRoute,
  postRealmClientsIdProtocolMappersAddModelsRoute,
  postRealmClientsIdProtocolMappersModelsRoute,
  putRealmClientScopesId1ProtocolMappersModelsId2Route,
  putRealmClientsId1ProtocolMappersModelsId2Route,
} from '../routes'

const app = new OpenAPIHono()

export const protocolMappersHandler = app
  .openapi(deleteRealmClientScopesId1ProtocolMappersModelsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesId1ProtocolMappersModelsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientScopesId1ProtocolMappersModelsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientScopesIdProtocolMappersAddModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientScopesIdProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdProtocolMappersProtocolProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsId1ProtocolMappersModelsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsId1ProtocolMappersModelsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsId1ProtocolMappersModelsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdProtocolMappersAddModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdProtocolMappersProtocolProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
