import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AbacAttributesIdRoute,
  deleteApiV1AbacRoomsRidAttributesKeyRoute,
  deleteApiV1AbacRoomsRidAttributesRoute,
  getApiV1AbacAttributesIdRoute,
  getApiV1AbacAttributesKeyIsInUseRoute,
  getApiV1AbacAttributesListAssignableRoute,
  getApiV1AbacAttributesListKeysRoute,
  getApiV1AbacAttributesRoute,
  getApiV1AbacAuditRoute,
  getApiV1AbacPdpHealthRoute,
  getApiV1AbacRoomsRoute,
  postApiV1AbacAttributesRoute,
  postApiV1AbacRoomsEvaluateMembershipRoute,
  postApiV1AbacRoomsRidAttributesKeyRoute,
  postApiV1AbacRoomsRidAttributesRoute,
  postApiV1AbacUsersSyncRoute,
  putApiV1AbacAttributesIdRoute,
  putApiV1AbacRoomsRidAttributesKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const abacHandler = app
  .openapi(postApiV1AbacRoomsRidAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AbacRoomsRidAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbacRoomsRidAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AbacRoomsRidAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AbacRoomsRidAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbacAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbacUsersSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AbacAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AbacAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacAttributesKeyIsInUseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacAttributesListKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacAttributesListAssignableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbacRoomsEvaluateMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbacPdpHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
