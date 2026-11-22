import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBooksV1VolumesMybooksRoute,
  getBooksV1VolumesRecommendedRoute,
  getBooksV1VolumesRoute,
  getBooksV1VolumesUseruploadedRoute,
  getBooksV1VolumesVolumeIdAssociatedRoute,
  getBooksV1VolumesVolumeIdRoute,
  postBooksV1VolumesRecommendedRateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumesHandler = app
  .openapi(getBooksV1VolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesMybooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesRecommendedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1VolumesRecommendedRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesUseruploadedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdAssociatedRoute, (c) => {
    throw new Error('Not implemented')
  })
