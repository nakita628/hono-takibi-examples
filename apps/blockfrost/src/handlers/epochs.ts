import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEpochsLatestParametersRoute,
  getEpochsLatestRoute,
  getEpochsNumberBlocksPoolIdRoute,
  getEpochsNumberBlocksRoute,
  getEpochsNumberNextRoute,
  getEpochsNumberParametersRoute,
  getEpochsNumberPreviousRoute,
  getEpochsNumberRoute,
  getEpochsNumberStakesPoolIdRoute,
  getEpochsNumberStakesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const epochsHandler = app
  .openapi(getEpochsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpochsLatestParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpochsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpochsNumberNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpochsNumberPreviousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpochsNumberStakesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpochsNumberStakesPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpochsNumberBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpochsNumberBlocksPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpochsNumberParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
