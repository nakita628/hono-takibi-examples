import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute,
  getV1GameCenterEnabledVersionsIdCompatibleVersionsRoute,
  getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute,
  patchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute,
  postV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gameCenterEnabledVersionsHandler = app
  .openapi(getV1GameCenterEnabledVersionsIdCompatibleVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
