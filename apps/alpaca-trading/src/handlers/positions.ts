import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2PositionsRoute,
  deleteV2PositionsSymbolOrAssetIdRoute,
  getV2PositionsRoute,
  getV2PositionsSymbolOrAssetIdRoute,
  postV2PositionsSymbolOrContractIdDoNotExerciseRoute,
  postV2PositionsSymbolOrContractIdExerciseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const positionsHandler = app
  .openapi(deleteV2PositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PositionsSymbolOrAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PositionsSymbolOrAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PositionsSymbolOrContractIdDoNotExerciseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PositionsSymbolOrContractIdExerciseRoute, (c) => {
    throw new Error('Not implemented')
  })
