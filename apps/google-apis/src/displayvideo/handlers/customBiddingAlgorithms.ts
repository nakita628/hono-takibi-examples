import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRoute,
  getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdRoute,
  getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRoute,
  getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptRoute,
  getV2CustomBiddingAlgorithmsRoute,
  patchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRoute,
  postV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRoute,
  postV2CustomBiddingAlgorithmsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customBiddingAlgorithmsHandler = app
  .openapi(getV2CustomBiddingAlgorithmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomBiddingAlgorithmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptRoute, (c) => {
    throw new Error('Not implemented')
  })
