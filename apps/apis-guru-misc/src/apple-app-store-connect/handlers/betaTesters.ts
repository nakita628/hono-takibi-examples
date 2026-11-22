import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BetaTestersIdRelationshipsAppsRoute,
  deleteV1BetaTestersIdRelationshipsBetaGroupsRoute,
  deleteV1BetaTestersIdRelationshipsBuildsRoute,
  deleteV1BetaTestersIdRoute,
  getV1BetaTestersIdAppsRoute,
  getV1BetaTestersIdBetaGroupsRoute,
  getV1BetaTestersIdBuildsRoute,
  getV1BetaTestersIdRelationshipsAppsRoute,
  getV1BetaTestersIdRelationshipsBetaGroupsRoute,
  getV1BetaTestersIdRelationshipsBuildsRoute,
  getV1BetaTestersIdRoute,
  getV1BetaTestersRoute,
  postV1BetaTestersIdRelationshipsBetaGroupsRoute,
  postV1BetaTestersIdRelationshipsBuildsRoute,
  postV1BetaTestersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const betaTestersHandler = app
  .openapi(getV1BetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaTestersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaTestersIdRelationshipsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdRelationshipsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaTestersIdRelationshipsBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdRelationshipsBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaTestersIdRelationshipsBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BetaTestersIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaTestersIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaTestersIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
