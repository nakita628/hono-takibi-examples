import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4LayersAsAppliedActivityIdContentsRoute,
  getV4LayersAsAppliedRoute,
  getV4LayersAsHarvestedActivityIdContentsRoute,
  getV4LayersAsHarvestedRoute,
  getV4LayersAsPlantedActivityIdContentsRoute,
  getV4LayersAsPlantedRoute,
  getV4LayersScoutingObservationsRoute,
  getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRoute,
  getV4LayersScoutingObservationsScoutingObservationIdAttachmentsRoute,
  getV4LayersScoutingObservationsScoutingObservationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const layersHandler = app
  .openapi(getV4LayersAsAppliedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersAsAppliedActivityIdContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersAsHarvestedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersAsHarvestedActivityIdContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersAsPlantedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersAsPlantedActivityIdContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersScoutingObservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersScoutingObservationsScoutingObservationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4LayersScoutingObservationsScoutingObservationIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
