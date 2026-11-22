import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdRoute,
  getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdRoute,
  getBooksV1VolumesVolumeIdLayersLayerIdDataRoute,
  getBooksV1VolumesVolumeIdLayersLayerIdRoute,
  getBooksV1VolumesVolumeIdLayersummaryRoute,
  getBooksV1VolumesVolumeIdLayersummarySummaryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const layersHandler = app
  .openapi(getBooksV1VolumesVolumeIdLayersLayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdLayersLayerIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdLayersummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdLayersummarySummaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
