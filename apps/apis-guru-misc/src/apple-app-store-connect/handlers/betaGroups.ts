import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BetaGroupsIdRelationshipsBetaTestersRoute,
  deleteV1BetaGroupsIdRelationshipsBuildsRoute,
  deleteV1BetaGroupsIdRoute,
  getV1BetaGroupsIdAppRoute,
  getV1BetaGroupsIdBetaTestersRoute,
  getV1BetaGroupsIdBuildsRoute,
  getV1BetaGroupsIdRelationshipsBetaTestersRoute,
  getV1BetaGroupsIdRelationshipsBuildsRoute,
  getV1BetaGroupsIdRoute,
  getV1BetaGroupsRoute,
  patchV1BetaGroupsIdRoute,
  postV1BetaGroupsIdRelationshipsBetaTestersRoute,
  postV1BetaGroupsIdRelationshipsBuildsRoute,
  postV1BetaGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const betaGroupsHandler = app
  .openapi(getV1BetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BetaGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsIdBetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaGroupsIdRelationshipsBetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsIdRelationshipsBetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaGroupsIdRelationshipsBetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaGroupsIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaGroupsIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaGroupsIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
